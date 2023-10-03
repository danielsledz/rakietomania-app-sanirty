import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'RakietomaniaApp',

  projectId: 'vjzwc7w5',
  dataset: 'development',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
