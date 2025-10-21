import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const EmbedSectionModel: Model = {
    type: 'object',
    name: 'EmbedSection',
    label: 'Embed',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Embedded content'
        },
        {
            type: 'list',
            name: 'embeds',
            label: 'Embeds',
            items: {
                type: 'object',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        default: ''
                    },
                    {
                        type: 'string',
                        name: 'embedUrl',
                        label: 'Embed URL',
                        description:
                            "Paste an embeddable URL (YouTube, Vimeo, Spotify, SoundCloud, Figma, etc.). Use provider's embed/share link when available."
                    },
                    {
                        type: 'string',
                        name: 'caption',
                        label: 'Caption',
                        default: ''
                    }
                ]
            },
            default: []
        },
        // Legacy single-embed fields for backward compatibility
        {
            type: 'string',
            name: 'embedUrl',
            label: 'Embed URL (legacy)',
            description:
                "Deprecated: prefer the 'Embeds' list above. Paste an embeddable URL (YouTube, Vimeo, etc.).",
            hidden: true
        },
        {
            type: 'string',
            name: 'caption',
            label: 'Caption (legacy)',
            default: '',
            hidden: true
        },
        ...colorFields,
        {
            type: 'number',
            name: 'spacing',
            label: 'Spacing between items',
            group: 'styles',
            controlType: 'slider',
            min: 0,
            max: 160,
            step: 1,
            unit: 'px',
            default: 16
        },
        {
            type: 'number',
            name: 'columns',
            label: 'Embeds per row',
            group: 'styles',
            controlType: 'slider',
            min: 1,
            max: 7,
            step: 1,
            default: 3
        },
        {
            type: 'enum',
            name: 'aspectRatio',
            label: 'Embed aspect ratio',
            group: 'styles',
            options: [
                { label: '1:1', value: '1:1' },
                { label: '3:2', value: '3:2' },
                { label: '2:3', value: '2:3' },
                { label: '4:3', value: '4:3' },
                { label: '3:4', value: '3:4' },
                { label: '16:9', value: '16:9' },
                { label: 'Auto', value: 'auto' }
            ],
            default: '16:9'
        },
        {
            type: 'boolean',
            name: 'showCaption',
            group: 'styles',
            label: 'Show caption',
            default: true
        },
        ...settingFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        { value: 'border-(--theme-light)', label: 'Light color', color: '$light' },
                        { value: 'border-(--theme-dark)', label: 'Dark color', color: '$dark' },
                        { value: 'border-(--theme-primary)', label: 'Primary color', color: '$primary' },
                        { value: 'border-(--theme-secondary)', label: 'Secondary color', color: '$secondary' },
                        { value: 'border-(--theme-complementary)', label: 'Complementary color', color: '$complementary' }
                    ],
                    textAlign: ['left', 'center', 'right']
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-(--theme-dark)',
                    textAlign: 'center'
                }
            }
        }
    ]
};
