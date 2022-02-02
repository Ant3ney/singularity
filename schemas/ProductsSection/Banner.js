export default {
   title: 'Products Banner',
   name: 'productsBanner',
   type: 'document',
   fields: [
      {
         title: 'Slides',
         name: 'slides',
         type: 'array',
         of: [
            {
               title: 'Slide',
               name: 'slide',
               type: 'object',
               fields: [
                  {
                     title: 'Title',
                     name: 'title',
                     type: 'boldsBreaksAndSpans',
                  },
                  {
                     title: 'Description',
                     name: 'description',
                     type: 'text',
                  },
                  {
                     title: 'Display Image',
                     name: 'displayImage',
                     type: 'image',
                  },
                  {
                     title: 'Text First',
                     name: 'tf',
                     type: 'boolean',
                     initialValue: true,
                  },
               ],
               preview: {
                  prepare() {
                     return {
                        title: `Product Banner Slide`,
                     };
                  },
               },
            },
         ],
      },
   ],
   preview: {
      prepare() {
         return {
            title: `Product Banner`,
         };
      },
   },
};
