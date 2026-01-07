export default {
  title: 'Contact Us Entry',
  name: 'contactUsEntry',
  type: 'document',
  fields: [
    {
      title: 'Message',
      name: 'message',
      type: 'text',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Read',
      name: 'read',
      type: 'boolean',
      initialValue: false,
    },
  ],

  preview: {
    select: {
      name: 'name',
      email: 'email',
      read: 'read',
      message: 'message',
    },

    prepare({ name, email, read, message }) {
      const displayName = name || email || 'Unknown Sender';

      if (read) {
        return {
          title: `✓ READ — ${displayName}`,
          subtitle: 'This message has been reviewed',
          media: () => '📩',
        };
      }

      return {
        title: `🚨 NEW MESSAGE — ${displayName}`,
        subtitle: 'Unread contact submission',
        media: () => '🔥',
      };
    },
  },
};
