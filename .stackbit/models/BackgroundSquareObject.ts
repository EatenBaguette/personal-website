import { Model } from '@stackbit/types';

export const BackgroundSquareObjectModel: Model = {
    type: 'object',
    name: 'BackgroundSquareObject',
    label: 'Background square',
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
            label: 'Label (for identification)',
            default: 'Background square'
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
            name: 'roundness',
            label: 'Corner roundness (%)',
            description: '0 = square, 100 = circle',
            default: 0,
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
