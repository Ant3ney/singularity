import {defineField, defineType} from 'sanity'

export const socialContactsSection = defineType({
  title: 'Social Contacts',
  name: 'socialContacts',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'boldsBreaksAndSpans',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Social Contacts',
      }
    },
  },
})
