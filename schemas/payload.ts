import {defineField, defineType} from 'sanity'

export const payload = defineType({
  name: 'payload',
  title: 'Payload',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the payload',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the payload',
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
      description: 'The image of the payload',
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Caption for the image',
        },
      ],
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Main payload', value: 'main_payload'},
          {title: 'Additional payload', value: 'additional_payload'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
