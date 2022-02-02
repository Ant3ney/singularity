export default {
   title: 'Social Contacts',
   name: 'socialContacts',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'boldsBreaksAndSpans',
      },
   ],
   preview: {
      prepare() {
         return {
            title: `Social Contacts`,
         };
      },
   },
};
