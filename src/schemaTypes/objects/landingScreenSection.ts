import {defineField, defineType} from 'sanity'

export const landingScreenSection = defineType({
  title: 'Landing Screen',
  name: 'landingScreen',
  type: 'object',
  fields: [
    defineField({
      title: 'Display Image',
      name: 'displayImage',
      type: 'image',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'boldsBreaksAndSpans',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'boldsBreaksAndSpans',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing Screen',
      }
    },
  },
})
