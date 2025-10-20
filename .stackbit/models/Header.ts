import { Model } from '@stackbit/types';

export const HeaderModel: Model = {
    type: 'object',
    name: 'Header',
    label: 'Header',
    labelField: 'title',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Your Brand'
        },
        {
            type: 'boolean',
            name: 'isTitleVisible',
            label: 'Display title',
            default: true
        },
        {
            type: 'model',
            name: 'logo',
            label: 'Logo',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                altText: 'Your logo image',
                caption: ''
            }
        },
        {
            type: 'list',
            name: 'primaryLinks',
            label: 'Primary navigation links',
            items: {
                type: 'model',
                models: ['Link']
            },
            default: [
                {
                    type: 'Link',
                    label: 'Home',
                    url: '/',
                    altText: 'Home'
                },
                {
                    type: 'Link',
                    label: 'Blog',
                    url: '/',
                    altText: 'Blog'
                }
            ]
        },
        {
            type: 'list',
            name: 'socialLinks',
            label: 'Social links',
            items: {
                type: 'model',
                models: ['Social']
            },
            default: [
                {
                    type: 'Social',
                    label: '',
                    altText: 'X (Twitter)',
                    url: '/',
                    icon: 'twitter'
                },
                {
                    type: 'Social',
                    label: '',
                    altText: 'GitHub',
                    url: '/',
                    icon: 'github'
                }
            ]
        },
        {
            type: 'enum',
            name: 'headerVariant',
            group: 'styles',
            label: 'Header arrangement',
            options: [
                {
                    label: 'Logo and primary links on the left',
                    value: 'variant-a'
                },
                {
                    label: 'Logo on the left and social links furthest to the right',
                    value: 'variant-b'
                },
                {
                    label: 'Logo on the left and primary links furthest to the right',
                    value: 'variant-c'
                }
            ],
            default: 'variant-c',
            required: true
        },
        {
            type: 'boolean',
            name: 'isSticky',
            group: 'styles',
            label: 'Make header stick to the top of the page',
            default: true
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the header',
            group: 'styles',
            controlType: 'palette',
            options: [
                {
                    label: 'Colors A',
                    value: 'colors-a',
                    textColor: '$onDark',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors B',
                    value: 'colors-b',
                    textColor: '$onLight',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors C',
                    value: 'colors-c',
                    textColor: '$onPrimary',
                    backgroundColor: '$primary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors D',
                    value: 'colors-d',
                    textColor: '$onSecondary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors E',
                    value: 'colors-e',
                    textColor: '$onComplementary',
                    backgroundColor: '$complementary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors F',
                    value: 'colors-f',
                    textColor: '$onLight',
                    backgroundColor: 'transparent',
                    borderColor: '#ececec'
                }
            ],
            default: 'colors-f'
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    width: ['narrow', 'wide', 'full']
                }
            },
            default: {
                self: {
                    width: 'narrow'
                }
            }
        }
    ]
};
