import {defineArrayMember, defineField, defineType} from 'sanity'

export const boldsBreaksAndSpans = defineType({
  title: 'Bolds Breaks and Spans',
  name: 'boldsBreaksAndSpans',
  type: 'array',
  of: [
    defineArrayMember({
      name: 'bold',
      title: 'Bold',
      type: 'object',
      fields: [defineField({title: 'title', name: 'title', type: 'string'})],
    }),
    defineArrayMember({
      name: 'break',
      title: 'Break',
      type: 'object',
      fields: [
        defineField({
          title: 'Break',
          name: 'break',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        }),
      ],
    }),
    defineArrayMember({
      name: 'textSpan',
      title: 'Span',
      type: 'object',
      fields: [defineField({title: 'title', name: 'title', type: 'string'})],
    }),
  ],
})
