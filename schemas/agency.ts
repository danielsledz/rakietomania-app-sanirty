import {defineField, defineType} from 'sanity'

export const agency = defineType({
  name: 'agency',
  title: 'Agency',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'administrator',
      title: 'Administrator',
      type: 'string',
    }),

    defineField({
      name: 'foundingYear',
      title: 'Founding Year',
      type: 'string',
    }),

    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    }),
  ],
})
