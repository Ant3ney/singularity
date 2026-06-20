import {defineField, defineType} from 'sanity'

export const youtubeDisplay = defineType({
  title: 'Youtube Display',
  name: 'youtubeDisplay',
  type: 'object',
  fields: [
    defineField({
      title: 'Video ID',
      type: 'string',
      name: 'id',
    }),
    defineField({
      title: 'Thumbnail',
      type: 'image',
      name: 'thumbnail',
    }),
    defineField({
      title: 'MT',
      type: 'boolean',
      name: 'mt',
      initialValue: true,
    }),
    defineField({
      title: 'MB',
      type: 'boolean',
      name: 'mb',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Youtube Display',
      }
    },
  },
})
