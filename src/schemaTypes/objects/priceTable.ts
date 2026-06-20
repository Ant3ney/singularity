import {defineArrayMember, defineField, defineType} from 'sanity'

export const priceTable = defineType({
  title: 'Price Table',
  name: 'priceTable',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'boldsBreaksAndSpans',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Choices',
      name: 'choices',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Choice',
          name: 'choice',
          type: 'object',
          fields: [
            defineField({
              title: 'Price',
              name: 'price',
              type: 'string',
            }),
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Href',
              name: 'href',
              type: 'string',
            }),
            defineField({
              title: 'Action Name',
              name: 'actionName',
              type: 'string',
            }),
            defineField({
              title: 'Tagline',
              name: 'tagline',
              type: 'string',
            }),
            defineField({
              title: 'Features',
              name: 'features',
              type: 'object',
              fields: [
                defineField({
                  title: 'Features',
                  name: 'features',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
