import {defineArrayMember, defineField, defineType} from 'sanity'

export const product = defineType({
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    defineField({
      title: 'General Info',
      name: 'generalInfo',
      type: 'generalProductInfo',
    }),
    defineField({
      title: 'Landing Product Banner',
      name: 'landingProductBanner',
      type: 'landingScreen',
    }),
    defineField({
      title: 'Pricing and Content',
      name: 'pricingAndContent',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Component List',
          name: 'componentList',
          type: 'productComponentList',
        }),
        defineArrayMember({
          title: 'Pricing Table',
          name: 'priceTable',
          type: 'priceTable',
        }),
      ],
    }),
    defineField({
      title: 'Tecnical Debt Policy',
      name: 'tecnicalDebtPolicy',
      type: 'productsBanner',
    }),
  ],
  preview: {
    select: {
      title: 'generalInfo.title',
    },
    prepare({title}: {title?: string}) {
      return {
        title: `Product - "${title || 'Unset'}"`,
      }
    },
  },
})
