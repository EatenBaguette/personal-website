import classNames from 'classnames';
import Image from 'next/image';

import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import { getDataAttrs } from '@/utils/get-data-attrs';
import Section from '../Section';

interface TextObject {
    type: 'TextObject';
    text: string;
    textType: 'title' | 'subtitle' | 'body';
    x: number;
    y: number;
    size: number;
    zIndex: number;
}

interface ImageObject {
    type: 'ImageObject';
    url: string;
    altText: string;
    x: number;
    y: number;
    scale: number;
    zIndex: number;
}

interface ActionObject {
    type: 'ActionObject';
    label: string;
    url: string;
    style: 'button' | 'link';
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    zIndex: number;
}

interface BackgroundSquareObject {
    type: 'BackgroundSquareObject';
    label: string;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    roundness: number;
    zIndex: number;
}

type ContentObject = TextObject | ImageObject | ActionObject | BackgroundSquareObject;

interface GeneralSectionProps {
    elementId?: string;
    colors?: 'colors-a' | 'colors-b' | 'colors-c' | 'colors-d' | 'colors-e' | 'colors-f';
    styles?: any;
    content?: ContentObject[];
}

export default function GeneralSection(props: GeneralSectionProps) {
    const { elementId, colors, styles = {}, content = [], ...rest } = props;

    const hasContent = content && content.length > 0;

    const sortedContent = content ? [...content].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0)) : [];

    if (!hasContent) {
        return (
            <div
                id={elementId || null}
                {...getDataAttrs(props)}
                className={classNames('w-full flex justify-center', styles.self?.padding ?? 'py-12 px-4')}
            >
                <div
                    className={classNames(
                        'h-0 w-full border-t border-current',
                        mapStyles({ width: styles.self?.width ?? 'wide' })
                    )}
                    style={{
                        borderTopWidth: '1px'
                    }}
                ></div>
            </div>
        );
    }

    const textColor = getTextColorFromBackground(colors);

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <div className="relative w-full min-h-[200px]" style={{ color: textColor }}>
                {sortedContent.map((obj, index) => {
                    switch (obj.type) {
                        case 'TextObject':
                            return <TextObjectRenderer key={index} obj={obj} />;
                        case 'ImageObject':
                            return <ImageObjectRenderer key={index} obj={obj} />;
                        case 'ActionObject':
                            return <ActionObjectRenderer key={index} obj={obj} />;
                        case 'BackgroundSquareObject':
                            return <BackgroundSquareRenderer key={index} obj={obj} />;
                        default:
                            return null;
                    }
                })}
            </div>
        </Section>
    );
}

function TextObjectRenderer({ obj }: { obj: TextObject }) {
    const textClassNames = classNames({
        'text-4xl sm:text-5xl font-bold': obj.textType === 'title',
        'text-xl sm:text-2xl': obj.textType === 'subtitle',
        'text-base': obj.textType === 'body'
    });

    return (
        <div
            className={classNames('absolute whitespace-pre-wrap', textClassNames)}
            style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                transform: 'translate(-50%, -50%)',
                fontSize: `calc(1em * ${obj.size / 100})`,
                zIndex: obj.zIndex || 0
            }}
        >
            {obj.text}
        </div>
    );
}

function ImageObjectRenderer({ obj }: { obj: ImageObject }) {
    return (
        <div
            className="absolute"
            style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                transform: `translate(-50%, -50%) scale(${obj.scale / 100})`,
                zIndex: obj.zIndex || 0
            }}
        >
            <Image src={obj.url} alt={obj.altText} width={200} height={200} className="max-w-none" />
        </div>
    );
}

function ActionObjectRenderer({ obj }: { obj: ActionObject }) {
    const isButton = obj.style === 'button';

    return (
        <div
            className="absolute"
            style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                transform: `translate(-50%, -50%) scale(${obj.scaleX / 100}, ${obj.scaleY / 100})`,
                zIndex: obj.zIndex || 0
            }}
        >
            {isButton ? (
                <a
                    href={obj.url}
                    className="inline-block px-6 py-3 bg-current text-white rounded hover:opacity-80 transition-opacity"
                    style={{
                        backgroundColor: 'var(--theme-primary)',
                        color: 'var(--theme-onPrimary)'
                    }}
                >
                    {obj.label}
                </a>
            ) : (
                <a href={obj.url} className="underline hover:no-underline">
                    {obj.label}
                </a>
            )}
        </div>
    );
}

function BackgroundSquareRenderer({ obj }: { obj: BackgroundSquareObject }) {
    const borderRadiusPercent = obj.roundness || 0;

    return (
        <div
            className="absolute bg-current opacity-10"
            style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                transform: `translate(-50%, -50%) scale(${obj.scaleX / 100}, ${obj.scaleY / 100})`,
                width: '100px',
                height: '100px',
                borderRadius: `${borderRadiusPercent}%`,
                zIndex: obj.zIndex || 0
            }}
        ></div>
    );
}

function getTextColorFromBackground(colors?: string): string {
    switch (colors) {
        case 'colors-a':
            return 'var(--theme-onDark)';
        case 'colors-b':
            return 'var(--theme-onLight)';
        case 'colors-c':
            return 'var(--theme-onPrimary)';
        case 'colors-d':
            return 'var(--theme-onSecondary)';
        case 'colors-e':
            return 'var(--theme-onComplementary)';
        case 'colors-f':
        default:
            return 'var(--theme-onLight)';
    }
}
