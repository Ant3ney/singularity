import {defineField, defineType} from 'sanity'

export const productsSection = defineType({
  title: 'Products Display',
  name: 'productsDisplay',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'boldsBreaksAndSpans',
    }),
    defineField({
      title: 'Padding Top',
      name: 'pt',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Products Display',
      }
    },
  },
})
