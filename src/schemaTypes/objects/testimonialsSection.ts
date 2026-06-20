import {defineField, defineType} from 'sanity'

export const testimonialsSection = defineType({
  title: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'boldsBreaksAndSpans',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title?: unknown}) {
      return {
        title: `Product - "${title ? 'Set' : 'Unset'}"`,
      }
    },
  },
})
