import {defineArrayMember, defineField, defineType} from 'sanity'

export const productComponentList = defineType({
  title: 'Component List',
  name: 'productComponentList',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Flat',
            value: 'flat',
          },
          {
            title: 'Box',
            value: 'box',
          },
        ],
      },
      initialValue: 'box',
    }),
    defineField({
      title: 'Show Price',
      name: 'showPrice',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      title: 'Components',
      name: 'components',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Component',
          name: 'component',
          type: 'object',
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'string',
            }),
            defineField({
              title: 'Icon',
              name: 'icon',
              type: 'image',
            }),
            defineField({
              title: 'Description',
              name: 'description',
              type: 'string',
            }),
            defineField({
              title: 'Price',
              name: 'price',
              type: 'number',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare({title}: {title?: string}) {
              return {
                title: `Component - "${title || 'Unset'}"`,
              }
            },
          },
        }),
      ],
    }),
  ],
})
