import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'day two with sanity',

  projectId: 'gnuv47z3',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        preview: '/preview'
      },
    }),],

  schema: {
    types: schemaTypes,
  },
})
