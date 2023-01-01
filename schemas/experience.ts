import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'workplace',
            title: 'Workplace',
            type: 'string',
        }),
        defineField({
            name: 'startDate',
            title: 'Start date',
            type: 'date',
        }),
        defineField({
            name: 'endDate',
            title: 'End date',
            type: 'date',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'localeString',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'localeString'
        })
    ]
});
