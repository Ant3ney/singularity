export default {
   title: 'Products Display',
   name: 'productsDisplay',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'boldsBreaksAndSpans',
      },
      {
         title: 'Padding Top',
         name: 'pt',
         type: 'boolean',
         initialValue: true,
      },
   ],
   preview: {
      prepare() {
         return {
            title: `Products Display`,
         };
      },
   },
};
