import { Model } from '@stackbit/types';

export const FooterModel: Model = {
    type: 'object',
    name: 'Footer',
    label: 'Footer',
    labelField: 'copyrightText',
    fieldGroups: [
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'list',
            name: 'primaryLinks',
            label: 'Primary navigation links',
            items: {
                type: 'model',
                models: ['Button', 'Link']
            },
            default: [
                {
                    type: 'Link',
                    label: 'Projects',
                    url: '/',
                    altText: 'Projects'
                },
                {
                    type: 'Link',
                    label: 'Info',
                    url: '/',
                    altText: 'Info'
                }
            ]
        },
        {
            type: 'model',
            name: 'contacts',
            label: 'Contacts',
            models: ['ContactBlock'],
            default: {
                phoneNumber: '850-123-5021',
                phoneAltText: 'Call us',
                email: 'john@doe.com',
                emailAltText: 'Email us'
            }
        },
        {
            type: 'markdown',
            name: 'copyrightText',
            label: 'Copyright text',
            default: 'Copyright text'
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the footer',
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
                    width: ['narrow', 'wide', 'full'],
                    padding: ['tw0:36']
                }
            },
            default: {
                self: {
                    width: 'narrow',
                    padding: ['pt-16', 'pb-16', 'pl-4', 'pr-4']
                }
            }
        }
    ]
};
