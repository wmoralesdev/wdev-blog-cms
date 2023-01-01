import { defineType } from 'sanity';

export default defineType({
    title: 'Localized string',
    name: 'localeString',
    type: 'object',
    fields: [
        {
            title: 'English',
            name: 'en',
            type: 'string',
        },
        {
            title: 'Spanish',
            name: 'es',
            type: 'string'
        }
    ]
});
