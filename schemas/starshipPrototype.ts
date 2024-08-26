export default {
  name: 'prototype',
  title: 'Prototype',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'rocketID',
      title: 'Rocket ID',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',

      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
}
