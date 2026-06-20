import {defineField, defineType} from 'sanity'

export const contactUsSection = defineType({
  title: 'Contact Us',
  name: 'contactUs',
  type: 'object',
  fields: [
    defineField({
      title: 'Add Margin Top',
      name: 'mt',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Us',
      }
    },
  },
})
