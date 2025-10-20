import { Model } from '@stackbit/types';

export const ImageObjectModel: Model = {
    type: 'object',
    name: 'ImageObject',
    label: 'Image object',
    labelField: 'altText',
    fieldGroups: [
        {
            name: 'position',
            label: 'Position & Size',
            icon: 'arrows-alt'
        }
    ],
    fields: [
        {
            type: 'image',
            name: 'url',
            label: 'Image',
            default: 'https://assets.stackbit.com/components/images/default/default-image.png'
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            default: 'Image'
        },
        {
            type: 'number',
            name: 'x',
            label: 'X position (%)',
            group: 'position',
            default: 50,
            required: true
        },
        {
            type: 'number',
            name: 'y',
            label: 'Y position (%)',
            group: 'position',
            default: 50,
            required: true
        },
        {
            type: 'number',
            name: 'scale',
            label: 'Scale (%)',
            group: 'position',
            default: 100,
            required: true
        },
        {
            type: 'number',
            name: 'zIndex',
            label: 'Front to back position (higher = front)',
            default: 0,
            required: true
        }
    ]
};
