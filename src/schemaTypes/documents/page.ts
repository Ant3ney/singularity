import {defineArrayMember, defineField, defineType} from 'sanity'

export const page = defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    defineField({title: 'Display Name', name: 'displayName', type: 'string'}),
    defineField({title: 'Route Name', name: 'routeName', type: 'string'}),
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({type: 'landingScreen'}),
        defineArrayMember({type: 'testimonials'}),
        defineArrayMember({type: 'featuredApps'}),
        defineArrayMember({type: 'contactUs'}),
        defineArrayMember({type: 'socialContacts'}),
        defineArrayMember({type: 'productsDisplay'}),
        defineArrayMember({type: 'productsBanner'}),
        defineArrayMember({type: 'youtubeDisplay'}),
      ],
    }),
  ],
})
