import classNames from 'classnames';
import React from 'react';

import { getDataAttrs } from '@/utils/get-data-attrs';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

function isSafeUrl(url?: string) {
    if (!url) return false;
    try {
        const u = new URL(url);
        return u.protocol === 'https:' || u.protocol === 'http:';
    } catch {
        return false;
    }
}

function mapAspectRatioStyles(aspectRatio?: string) {
    switch (aspectRatio) {
        case '1:1':
            return 'aspect-square';
        case '2:3':
            return 'aspect-2/3';
        case '3:2':
            return 'aspect-3/2';
        case '3:4':
            return 'aspect-3/4';
        case '4:3':
            return 'aspect-4/3';
        case '16:9':
            return 'aspect-video';
        default:
            return null;
    }
}

function mapColStyles(columns?: number) {
    switch (columns) {
        case 2:
            return 'grid-cols-2';
        case 3:
            return 'grid-cols-2 sm:grid-cols-3';
        case 4:
            return 'grid-cols-2 sm:grid-cols-4';
        case 5:
            return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';
        case 6:
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6';
        case 7:
            return 'grid-cols-2 sm:grid-cols-4 md:grid-cols-7';
        default:
            return null;
    }
}

export default function EmbedSection(props) {
    const {
        elementId,
        colors,
        styles = {},
        title,
        // legacy single fields (hidden in model but may exist in content)
        caption,
        embedUrl,
        // new tiled props
        embeds = [],
        columns = 3,
        spacing = 16,
        aspectRatio = '16:9',
        showCaption = true
    } = props as any;

    const sectionAlign = styles.self?.textAlign ?? 'center';

    const hasEmbeds = Array.isArray(embeds) && embeds.length > 0;

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <div className={classNames(mapStyles({ textAlign: sectionAlign }))} {...getDataAttrs(props)}>
                {title && <h2 className="text-3xl sm:text-4xl mb-6">{title}</h2>}

                {hasEmbeds ? (
                    <div
                        className={classNames('grid place-items-center', mapColStyles(columns))}
                        style={{ gap: spacing ? `${spacing}px` : undefined }}
                    >
                        {embeds.map((item: any, index: number) => (
                            <figure
                                key={index}
                                className={classNames('overflow-hidden', 'relative', 'w-full', mapAspectRatioStyles(aspectRatio))}
                            >
                                {isSafeUrl(item?.embedUrl) && (
                                    <iframe
                                        className={classNames('w-full h-full', mapAspectRatioStyles(aspectRatio) ? 'absolute top-0 left-0' : 'min-h-[320px]')}
                                        src={item.embedUrl}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        loading="lazy"
                                        allowFullScreen
                                        title={item.title || title || 'Embedded content'}
                                    />
                                )}
                                {showCaption && item?.caption && (
                                    <figcaption className="absolute bg-inverse/70 text-inverse left-0 mx-2 bottom-2 p-1.5 text-xs pointer-events-none">
                                        {item.caption}
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>
                ) : (
                    // Back-compat: single iframe rendering if only legacy fields present
                    <div className={classNames('w-full', mapStyles({ width: styles.self?.width ?? 'wide' }))}>
                        {mapAspectRatioStyles(aspectRatio) ? (
                            <div className={classNames('relative w-full', mapAspectRatioStyles(aspectRatio))}>
                                {isSafeUrl(embedUrl) && (
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded"
                                        src={embedUrl}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        loading="lazy"
                                        allowFullScreen
                                        title={title || 'Embedded content'}
                                    />
                                )}
                            </div>
                        ) : (
                            isSafeUrl(embedUrl) && (
                                <iframe
                                    className="w-full min-h-[320px] rounded"
                                    src={embedUrl}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    loading="lazy"
                                    allowFullScreen
                                    title={title || 'Embedded content'}
                                />
                            )
                        )}
                        {caption && (
                            <p className={classNames('text-sm opacity-80 mt-3', mapStyles({ textAlign: sectionAlign }))}>{caption}</p>
                        )}
                    </div>
                )}
            </div>
        </Section>
    );
}
