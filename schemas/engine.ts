import {defineField, defineType} from 'sanity'

export const engine = defineType({
  name: 'engine',
  title: 'Engine',
  type: 'document',
  preview: {
    select: {
      title: 'name', // wybiera tytuł, który będzie wyświetlany w podglądzie
      media: 'image', // wybiera obraz, który będzie wyświetlany w podglądzie
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media, // przekazuje obraz do podglądu
      }
    },
  },
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
