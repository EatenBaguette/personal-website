import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const ButtonSectionModel: Model = {
    type: 'object',
    name: 'ButtonSection',
    label: 'Button section',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Links'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: ''
        },
        {
            type: 'list',
            name: 'items',
            label: 'Buttons',
            items: {
                type: 'model',
                models: ['ButtonItem']
            },
            default: [
                {
                    type: 'ButtonItem',
                    title: 'GitHub',
                    caption: 'Follow',
                    url: 'https://github.com/',
                    imageSource: 'icon',
                    icon: 'github',
                    altText: 'GitHub'
                },
                {
                    type: 'ButtonItem',
                    title: 'Instagram',
                    caption: 'Follow',
                    url: 'https://instagram.com/',
                    imageSource: 'icon',
                    icon: 'instagram',
                    altText: 'Instagram'
                }
            ]
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
            type: 'enum',
            name: 'itemBackgroundColor',
            label: 'Button background',
            group: 'styles',
            options: [
                { label: 'Transparent', value: 'transparent' },
                { label: 'Light', value: 'var(--theme-light)' },
                { label: 'Dark', value: 'var(--theme-dark)' },
                { label: 'Primary', value: 'var(--theme-primary)' },
                { label: 'Secondary', value: 'var(--theme-secondary)' },
                { label: 'Complementary', value: 'var(--theme-complementary)' }
            ],
            default: 'transparent'
        },
        {
            type: 'enum',
            name: 'itemBorderColor',
            label: 'Button border color',
            group: 'styles',
            options: [
                { label: 'Light', value: 'var(--theme-light)' },
                { label: 'Dark', value: 'var(--theme-dark)' },
                { label: 'Primary', value: 'var(--theme-primary)' },
                { label: 'Secondary', value: 'var(--theme-secondary)' },
                { label: 'Complementary', value: 'var(--theme-complementary)' }
            ],
            default: 'var(--theme-dark)'
        },
        {
            type: 'number',
            name: 'columns',
            label: 'Buttons per row',
            group: 'styles',
            controlType: 'slider',
            min: 1,
            max: 6,
            step: 1,
            default: 3
        },
        {
            type: 'enum',
            name: 'captionPlacement',
            label: 'Caption placement',
            group: 'styles',
            options: [
                { label: 'Above', value: 'above' },
                { label: 'Below', value: 'below' },
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' }
            ],
            default: 'below'
        },
        ...settingFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full'],
                    height: ['auto', 'screen'],
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
                    width: 'full',
                    height: 'auto',
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
