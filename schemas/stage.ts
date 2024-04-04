import {defineField, defineType} from 'sanity'

export const stage = defineType({
  name: 'stage',
  title: 'Stage',
  type: 'document',
  preview: {
    select: {
      title: 'nameForUS',
      image: 'image',
    },

    prepare(selection) {
      const {title} = selection
      return {
        title: title, // Tutaj możesz modyfikować wartość tytułu, np. dodawać prefix, suffix itp.
        // subtitle: 'Tu możesz dodać podtytuł, jeśli potrzebujesz'
      }
    },
  },
  fields: [
    defineField({
      name: 'nameForUS',
      title: 'Name for us',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

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
