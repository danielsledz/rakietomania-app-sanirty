import {defineField, defineType} from 'sanity'

export const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Caption for the image',
    },
  ],
}

export const videos = {
  name: 'videos',
  title: 'Videos',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
  ],
}

export const prototype = defineType({
  name: 'prototype',
  title: 'Prototype',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Ship', value: 'ship'},
          {title: 'Booster', value: 'booster'},
          {title: 'Test Tank', value: 'tank'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
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
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          name: 'event',
          title: 'Event',
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
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          name: 'videos',
          title: 'Videos',
          type: 'videos',
        },
      ],
    }),
  ],
})
