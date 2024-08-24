import {defineType} from 'sanity'

export default defineType({
  name: 'customImage',
  title: 'Custom Image',
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
    },
  ],
})
