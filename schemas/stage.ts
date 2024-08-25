import {defineField, defineType} from 'sanity'

export const stage = defineType({
  name: 'stage',
  title: 'Stage',
  type: 'document',
  preview: {
    select: {
      title: 'nameForUS', // the title to display
      media: 'image', // the image to display
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media, // ensure the image is passed here for display
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
