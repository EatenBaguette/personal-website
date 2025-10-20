import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const GeneralSectionModel: Model = {
    type: 'object',
    name: 'GeneralSection',
    label: 'General (canvas)',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [
        {
            name: 'content',
            label: 'Content',
            icon: 'content'
        },
        ...styleFieldsGroup,
        ...settingFieldsGroup
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            description: 'The value of the field is used for presentation purposes in Stackbit',
            default: 'General Section'
        },
        {
            type: 'list',
            name: 'content',
            label: 'Objects',
            group: 'content',
            items: {
                type: 'model',
                models: ['TextObject', 'ImageObject', 'ActionObject', 'BackgroundSquareObject']
            },
            default: []
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
                        {
                            value: 'border-(--theme-light)',
                            label: 'Light color',
                            color: '$light'
                        },
                        {
                            value: 'border-(--theme-dark)',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-(--theme-primary)',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-(--theme-secondary)',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-(--theme-complementary)',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ]
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
                    borderColor: 'border-(--theme-dark)'
                }
            }
        }
    ]
};
