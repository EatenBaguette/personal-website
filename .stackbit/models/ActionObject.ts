import { Model } from '@stackbit/types';

export const ActionObjectModel: Model = {
    type: 'object',
    name: 'ActionObject',
    label: 'Action (button/link)',
    labelField: 'label',
    fieldGroups: [
        {
            name: 'position',
            label: 'Position & Size',
            icon: 'arrows-alt'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'label',
            label: 'Label',
            default: 'Click here'
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            default: '/',
            required: true
        },
        {
            type: 'enum',
            name: 'style',
            label: 'Style',
            options: [
                { label: 'Button', value: 'button' },
                { label: 'Link', value: 'link' }
            ],
            default: 'button'
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
            name: 'scaleX',
            label: 'Width scale (%)',
            group: 'position',
            default: 100,
            required: true
        },
        {
            type: 'number',
            name: 'scaleY',
            label: 'Height scale (%)',
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
