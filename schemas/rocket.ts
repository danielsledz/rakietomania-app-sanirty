import {defineField, defineType} from 'sanity'

export const CarryingCapacity = {
  name: 'carrying_capacity',
  title: 'Carrying Capacity',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
  ],
}

export const rocket = defineType({
  name: 'rocket',
  title: 'Rocket',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the rocket',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the rocket',
    }),
    defineField({
      name: 'generalInformations',
      title: 'General Informations',
      description: 'The general informations of the rocket',
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
      name: 'carrying_capacity',
      title: 'Carrying Capacity',
      type: 'array',
      of: [
        {
          name: 'capacity',
          title: 'Carrying  Capacity',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The main image of the rocket',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'gallery',
        },
      ],
    }),

    defineField({
      name: 'stages',
      title: 'Stages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'stage'}],
        },
      ],
    }),

    defineField({
      name: 'engines',
      title: 'Engines',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'engine'}],
        },
      ],
    }),

    defineField({
      name: 'agencies',
      title: 'Agencies',
      type: 'reference',
      to: [{type: 'agency'}],
    }),

    defineField({
      name: 'successfull_launches',
      title: 'Successfull launches',
      type: 'string',
      description: 'The number of succesfull launches',
    }),
    defineField({
      name: 'failed_launches',
      title: 'Failed launches',
      type: 'string',
      description: 'The number of failed launches',
    }),
  ],
})
