export default {
   title: 'Price Table',
   name: 'priceTable',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'boldsBreaksAndSpans',
      },
      {
         title: 'Subtitle',
         name: 'subtitle',
         type: 'string',
      },
      {
         title: 'Choices',
         name: 'choices',
         type: 'array',
         of: [
            {
               title: 'Choice',
               name: 'choice',
               type: 'object',
               fields: [
                  {
                     title: 'Price',
                     name: 'price',
                     type: 'string',
                  },
                  {
                     title: 'Name',
                     name: 'name',
                     type: 'string',
                  },
                  {
                     title: 'Href',
                     name: 'href',
                     type: 'string',
                  },
                  {
                     title: 'Action Name',
                     name: 'actionName',
                     type: 'string',
                  },
                  {
                     title: 'Tagline',
                     name: 'tagline',
                     type: 'string',
                  },
                  {
                     title: 'Features',
                     name: 'features',
                     type: 'object',
                     fields: [
                        {
                           title: 'Features',
                           name: 'features',
                           type: 'array',
                           of: [
                              {
                                 type: 'string',
                              },
                           ],
                        },
                     ],
                  },
               ],
            },
         ],
      },
   ],
};
