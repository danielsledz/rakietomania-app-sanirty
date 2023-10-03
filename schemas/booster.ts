import {defineField, defineType} from 'sanity'

export const booster = defineType({
  name: 'booster',
  title: 'Booster',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'facts',
      title: 'Facts',
      type: 'array',
      of: [
        {
          name: 'fact',
          title: 'Fact',
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

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'currentLocation',
      title: 'Current Location',
      type: 'string',
    }),
  ],
})
