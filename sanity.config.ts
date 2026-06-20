import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'SingularityLandingAndProducts',
  projectId: '2a4pwebi',
  dataset: 'production',
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
