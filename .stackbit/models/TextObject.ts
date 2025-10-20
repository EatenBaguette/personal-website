import { Model } from '@stackbit/types';

export const TextObjectModel: Model = {
    type: 'object',
    name: 'TextObject',
    label: 'Text object',
    labelField: 'text',
    fieldGroups: [
        {
            name: 'position',
            label: 'Position & Size',
            icon: 'arrows-alt'
        }
    ],
    fields: [
        {
            type: 'text',
            name: 'text',
            label: 'Text',
            default: 'Sample text'
        },
        {
            type: 'enum',
            name: 'textType',
            label: 'Text type',
            options: [
                { label: 'Title', value: 'title' },
                { label: 'Subtitle', value: 'subtitle' },
                { label: 'Body', value: 'body' }
            ],
            default: 'body'
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
            name: 'size',
            label: 'Size (%)',
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
