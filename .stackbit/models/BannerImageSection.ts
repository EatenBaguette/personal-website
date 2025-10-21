import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const BannerImageSectionModel: Model = {
    type: 'object',
    name: 'BannerImageSection',
    label: 'Banner image',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Banner Title'
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            default: ''
        },
        {
            type: 'model',
            name: 'image',
            label: 'Image',
            models: ['ImageBlock'],
            required: true,
            default: {
                type: 'ImageBlock',
                url: '/images/placeholder.png',
                altText: 'Banner image'
            }
        },
        // Banner height control (affects the image container height)
        {
            type: 'enum',
            name: 'bannerHeight',
            group: 'styles',
            label: 'Banner height',
            description: 'Controls the visible height of the banner image',
            options: [
                { label: 'Auto (image natural height)', value: 'auto' },
                { label: 'Short', value: 'short' },
                { label: 'Medium', value: 'medium' },
                { label: 'Tall', value: 'tall' },
                { label: 'Full screen', value: 'screen' }
            ],
            default: 'medium'
        },
        ...colorFields,
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
                    width: 'full',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-0', 'pb-0', 'pl-0', 'pr-0'],
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
