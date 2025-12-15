import classNames from 'classnames';
import { iconMap } from '@/components/svgs';
import ImageBlock from '@/components/molecules/ImageBlock';
import Link from '@/components/atoms/Link';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

type ButtonItem = {
    title?: string;
    caption?: string;
    url: string;
    openInNewTab?: boolean;
    imageSource?: 'icon' | 'image';
    icon?: string;
    image?: any;
    altText?: string;
    backgroundColor?: string;
    borderColor?: string;
};

type ButtonSectionProps = {
    type: 'ButtonSection';
    elementId?: string;
    colors?: string;
    title?: string;
    subtitle?: string;
    items?: ButtonItem[];
    columns?: number;
    spacing?: number;
    captionPlacement?: 'above' | 'below' | 'left' | 'right';
    itemBackgroundColor?: string;
    itemBorderColor?: string;
    styles?: any;
};

export default function ButtonSection(props: ButtonSectionProps) {
    const {
        elementId,
        colors,
        title,
        subtitle,
        items = [],
        columns = 3,
        spacing = 16,
        captionPlacement = 'below',
        styles = {}
    } = props;

    const sectionAlign = styles.self?.textAlign ?? 'left';

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {items.length > 0 && (
                <div
                    className={classNames('grid', mapColStyles(columns), {
                        'mt-12': title || subtitle
                    })}
                    style={{ gap: spacing ? `${spacing}px` : undefined }}
                >
                    {items.map((item, index) => (
                        <ButtonCard
                            key={index}
                            item={item}
                            captionPlacement={captionPlacement}
                            sectionBackgroundColor={props.itemBackgroundColor}
                            sectionBorderColor={props.itemBorderColor}
                        />)
                    )}
                </div>
            )}
        </Section>
    );
}

function ButtonCard({
    item,
    captionPlacement,
    sectionBackgroundColor,
    sectionBorderColor
}: {
    item: ButtonItem;
    captionPlacement: ButtonSectionProps['captionPlacement'];
    sectionBackgroundColor?: string;
    sectionBorderColor?: string;
}) {
    const { title, caption, url, openInNewTab = true, imageSource = 'icon', icon, image, altText } = item;
    const IconComponent = icon ? iconMap[icon] : null;

    const showCaption = !!caption;
    const vertical = captionPlacement === 'above' || captionPlacement === 'below';
    const reverse = captionPlacement === 'above' || captionPlacement === 'left';

    const effectiveBackground = item.backgroundColor || sectionBackgroundColor;
    const effectiveBorderColor = item.borderColor || sectionBorderColor;

    const content = (
        <div
            className={classNames(
                'w-full h-full border-2 transition hover:bottom-shadow-6 hover:-translate-y-1.5',
                'flex',
                vertical ? 'flex-col' : 'flex-row',
                reverse ? 'flex-col-reverse' : '',
                reverse && !vertical ? 'flex-row-reverse' : '',
                'items-center justify-center gap-3 p-4 rounded'
            )}
            style={{
                background: effectiveBackground || undefined,
                borderColor: effectiveBorderColor || undefined
            }}
        >
            <div className="flex items-center justify-center">
                {imageSource === 'icon' && IconComponent && (
                    <IconComponent className="fill-current w-8 h-8" aria-hidden={altText ? undefined : true} />
                )}
                {imageSource === 'image' && image && (
                    <ImageBlock {...image} className="w-8 h-8 object-contain" />
                )}
            </div>
            <div className={classNames('text-center', vertical ? '' : 'text-left')}>
                {title && <div className="text-lg leading-tight">{title}</div>}
                {showCaption && <div className="text-sm opacity-80 mt-1">{caption}</div>}
            </div>
        </div>
    );

    return (
        <Link
            href={url}
            target={openInNewTab ? '_blank' : undefined}
            rel={openInNewTab ? 'noopener noreferrer' : undefined}
            aria-label={altText}
            className="no-underline"
        >
            {content}
        </Link>
    );
}

function mapColStyles(columns?: number) {
    switch (columns) {
        case 1:
            return 'grid-cols-1';
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
        default:
            return 'grid-cols-2 sm:grid-cols-3';
    }
}
