import {defineArrayMember, defineField, defineType} from 'sanity'

export const productBannerSection = defineType({
  title: 'Products Banner',
  name: 'productsBanner',
  type: 'object',
  fields: [
    defineField({
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Slide',
          name: 'slide',
          type: 'object',
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'boldsBreaksAndSpans',
            }),
            defineField({
              title: 'Description',
              name: 'description',
              type: 'text',
            }),
            defineField({
              title: 'Display Image',
              name: 'displayImage',
              type: 'image',
            }),
            defineField({
              title: 'Text First',
              name: 'tf',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            prepare() {
              return {
                title: 'Product Banner Slide',
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Banner',
      }
    },
  },
})
