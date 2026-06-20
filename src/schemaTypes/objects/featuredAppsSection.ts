import {defineArrayMember, defineField, defineType} from 'sanity'

export const featuredAppsSection = defineType({
  title: 'Featured Apps',
  name: 'featuredApps',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'boldsBreaksAndSpans',
    }),
    defineField({
      title: 'Featureds',
      name: 'featureds',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Featured App',
          name: 'featuredApp',
          type: 'object',
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'boldsBreaksAndSpans',
            }),
            defineField({title: 'Image', name: 'image', type: 'image'}),
            defineField({
              title: 'Link',
              name: 'link',
              type: 'url',
            }),
            defineField({title: 'Description', name: 'description', type: 'text'}),
          ],
          preview: {
            prepare() {
              return {
                title: 'Featured App',
              }
            },
          },
        }),
      ],
      validation: (rule) => [
        rule.required().min(1).error('You must have 1 Featured App field'),
        rule.max(3).error("You can't create more than 3 Featured App fields"),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Featured Apps',
      }
    },
  },
})
