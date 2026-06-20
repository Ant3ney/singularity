import {defineField, defineType} from 'sanity'

export const generalProductInfo = defineType({
  title: 'Product',
  name: 'generalProductInfo',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      title: 'Short Description',
      name: 'shortDescription',
      type: 'string',
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      title: 'Action Type',
      name: 'actionType',
      type: 'string',
      initialValue: 'pluginMessage',
      options: {
        list: [
          {title: 'Plugin Message', value: 'pluginMessage'},
          {title: 'Link', value: 'link'},
        ],
      },
    }),
    defineField({
      title: 'Action Link',
      name: 'actionLink',
      type: 'url',
      hidden: ({parent}) => parent?.actionType !== 'link',
    }),
    defineField({
      title: 'Form Addon Message',
      name: 'pluginMessage',
      type: 'string',
      hidden: ({parent}) => parent?.actionType !== 'pluginMessage',
    }),
    defineField({
      title: 'Action Button Title',
      name: 'actionTitle',
      type: 'string',
      initialValue: 'Order',
    }),
    defineField({title: 'Priority', name: 'priority', type: 'number'}),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title?: string}) {
      return {
        title: `Product - "${title || 'Unset'}"`,
      }
    },
  },
})
