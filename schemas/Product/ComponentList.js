export default {
   title: 'Component List',
   name: 'productComponentList',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'string',
      },
      {
         title: 'Subtitle',
         name: 'subtitle',
         type: 'string',
      },
      {
         title: 'Type',
         name: 'type',
         type: 'string',
         options: {
            list: [
               {
                  title: 'Flat',
                  value: 'flat',
               },
               {
                  title: 'Box',
                  value: 'box',
               },
            ],
         },
         initialValue: 'box',
      },
      {
         title: 'Show Price',
         name: 'showPrice',
         type: 'boolean',
         initialValue: true,
      },
      {
         title: 'Components',
         name: 'components',
         type: 'array',
         of: [
            {
               title: 'Component',
               name: 'component',
               type: 'object',
               fields: [
                  {
                     title: 'Title',
                     name: 'title',
                     type: 'string',
                  },
                  {
                     title: 'Icon',
                     name: 'icon',
                     type: 'image',
                  },
                  {
                     title: 'Description',
                     name: 'description',
                     type: 'string',
                  },
                  {
                     title: 'Price',
                     name: 'price',
                     type: 'number',
                  },
               ],
               preview: {
                  select: {
                     title: 'title',
                  },
                  prepare(selection) {
                     return {
                        title: `Coponent - "${
                           !selection.title ? 'Unset' : selection.title
                        }"`,
                     };
                  },
               },
            },
         ],
      },
   ],
};
