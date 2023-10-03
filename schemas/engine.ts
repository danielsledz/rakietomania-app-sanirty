import {defineField, defineType} from 'sanity'

export const engine = defineType({
  name: 'engine',
  title: 'Engine',
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
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          name: 'specification',
          title: 'Specification',
          type: 'string',
        },
      ],
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
