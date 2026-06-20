import {defineField, defineType} from 'sanity'

export const contactUsEntry = defineType({
  title: 'Contact Us Entry',
  name: 'contactUsEntry',
  type: 'document',
  fields: [
    defineField({
      title: 'Message',
      name: 'message',
      type: 'text',
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Read',
      name: 'read',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      read: 'read',
    },
    prepare({name, email, read}: {name?: string; email?: string; read?: boolean}) {
      const displayName = name || email || 'Unknown Sender'

      return {
        title: `${read ? 'READ' : 'NEW MESSAGE'} - ${displayName}`,
        subtitle: read ? 'This message has been reviewed' : 'Unread contact submission',
      }
    },
  },
})
