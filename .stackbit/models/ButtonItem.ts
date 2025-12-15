import { Model } from '@stackbit/types';

export const ButtonItemModel: Model = {
    type: 'object',
    name: 'ButtonItem',
    label: 'Button Item',
    labelField: 'title',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'Follow me'
        },
        {
            type: 'string',
            name: 'caption',
            label: 'Caption',
            default: ''
        },
        {
            type: 'string',
            name: 'url',
            label: 'URL',
            required: true,
            default: '/'
        },
        {
            type: 'boolean',
            name: 'openInNewTab',
            label: 'Open in new tab',
            default: true
        },
        {
            type: 'enum',
            name: 'imageSource',
            label: 'Image Source',
            controlType: 'button-group',
            options: [
                { label: 'Social icon', value: 'icon' },
                { label: 'Custom image', value: 'image' }
            ],
            default: 'icon'
        },
        {
            type: 'enum',
            name: 'icon',
            label: 'Social icon',
            description: 'Choose a social icon to display on the button',
            options: [
                { label: 'Bluesky', value: 'bluesky' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'GitHub', value: 'github' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Reddit', value: 'reddit' },
                { label: 'X (Twitter)', value: 'twitter' },
                { label: 'SoundCloud', value: 'soundcloud' },
                { label: 'Vimeo', value: 'vimeo' },
                { label: 'YouTube', value: 'youtube' }
            ],
            default: 'facebook',
            hidden: false
        },
        {
            type: 'model',
            name: 'image',
            label: 'Custom image',
            models: ['ImageBlock'],
            hidden: false,
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/default-image.png',
                altText: 'Image',
                caption: ''
            }
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            description: 'Alternative text for the image/icon (for accessibility)',
            default: ''
        },
        {
            type: 'enum',
            name: 'backgroundColor',
            label: 'Button background',
            description: 'Override background color for this button',
            options: [
                { label: 'Inherit (section default)', value: '' },
                { label: 'Transparent', value: 'transparent' },
                { label: 'Light', value: 'var(--theme-light)' },
                { label: 'Dark', value: 'var(--theme-dark)' },
                { label: 'Primary', value: 'var(--theme-primary)' },
                { label: 'Secondary', value: 'var(--theme-secondary)' },
                { label: 'Complementary', value: 'var(--theme-complementary)' }
            ],
            default: ''
        },
        {
            type: 'enum',
            name: 'borderColor',
            label: 'Button border color',
            description: 'Override border color for this button',
            options: [
                { label: 'Inherit (section default)', value: '' },
                { label: 'Light', value: 'var(--theme-light)' },
                { label: 'Dark', value: 'var(--theme-dark)' },
                { label: 'Primary', value: 'var(--theme-primary)' },
                { label: 'Secondary', value: 'var(--theme-secondary)' },
                { label: 'Complementary', value: 'var(--theme-complementary)' }
            ],
            default: ''
        }
    ]
};
