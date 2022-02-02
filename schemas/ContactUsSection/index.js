export default {
   title: 'Contact Us',
   name: 'contactUs',
   type: 'document',
   fields: [
      {
         title: 'Add Margin Top',
         name: 'mt',
         type: 'boolean',
         initialValue: true,
      },
   ],
   preview: {
      prepare() {
         return {
            title: `Contact Us`,
         };
      },
   },
};
