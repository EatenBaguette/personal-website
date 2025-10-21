import classNames from 'classnames';

import ImageBlock from '@/components/molecules/ImageBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

function mapBannerHeightToClasses(value?: string) {
    switch (value) {
        case 'short':
            return 'h-48 sm:h-64';
        case 'tall':
            return 'h-80 sm:h-96';
        case 'screen':
            return 'min-h-screen';
        case 'medium':
        default:
            return 'h-64 sm:h-80';
    }
}

export default function BannerImageSection(props: any) {
    const { elementId, colors, title, subtitle, image, styles = {}, bannerHeight = 'medium' } = props;
    const sectionAlign = styles?.self?.textAlign ?? 'center';

    if (!image) return null;

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <div
                className={classNames(
                    'relative w-full',
                    mapStyles({ width: styles.self?.width ?? 'full' }),
                    bannerHeight === 'auto' ? null : mapBannerHeightToClasses(bannerHeight)
                )}
            >
                {/* Banner image */}
                <ImageBlock {...image} className={classNames('w-full object-cover', bannerHeight === 'auto' ? '' : 'h-full')} />

                {(title || subtitle) && (
                    <div
                        className={classNames(
                            'absolute inset-0 flex flex-col items-center justify-center px-4',
                            mapStyles({ textAlign: sectionAlign })
                        )}
                    >
                        {title && <h2 className="text-4xl sm:text-5xl text-inverse drop-shadow-md">{title}</h2>}
                        {subtitle && (
                            <p className={classNames('text-lg sm:text-xl text-inverse/90', { 'mt-3': !!title })}>{subtitle}</p>
                        )}
                    </div>
                )}
            </div>
        </Section>
    );
}
