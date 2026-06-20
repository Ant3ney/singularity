import {defineField, defineType} from 'sanity'

export const waitlistEntry = defineType({
  title: 'Waitlist Entry',
  name: 'waitlistEntry',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Mailing List',
      name: 'mailingList',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Project Goal',
      name: 'projectGoal',
      type: 'text',
    }),
    defineField({
      title: 'Target Audience',
      name: 'targetAudience',
      type: 'text',
    }),
    defineField({
      title: 'Budget',
      name: 'budget',
      type: 'string',
    }),
    defineField({
      title: 'Desired Launch Date',
      name: 'desiredLaunchDate',
      type: 'date',
    }),
    defineField({
      title: 'Hosting',
      name: 'hosting',
      type: 'string',
    }),
    defineField({
      title: 'CMS',
      name: 'cms',
      type: 'string',
    }),
    defineField({
      title: 'Branding',
      name: 'branding',
      type: 'text',
    }),
    defineField({
      title: 'Page Count',
      name: 'pageCount',
      type: 'string',
    }),
    defineField({
      title: 'Competitors',
      name: 'competitors',
      type: 'text',
    }),
    defineField({
      title: 'Integrations',
      name: 'integrations',
      type: 'text',
    }),
    defineField({
      title: 'Status',
      name: 'status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Reviewed', value: 'reviewed'},
          {title: 'Contacted', value: 'contacted'},
          {title: 'Archived', value: 'archived'},
        ],
      },
    }),
    defineField({
      title: 'Submitted At',
      name: 'submittedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      title: 'Source',
      name: 'source',
      type: 'string',
      initialValue: 'website-waitlist',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      status: 'status',
    },
    prepare({name, email, status}: {name?: string; email?: string; status?: string}) {
      const displayName = name || email || 'Unknown Submitter'

      return {
        title: displayName,
        subtitle: status ? `Status: ${status}` : 'Waitlist submission',
      }
    },
  },
})
