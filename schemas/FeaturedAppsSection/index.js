export default {
   title: 'Featured Apps',
   name: 'featuredApps',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'boldsBreaksAndSpans',
      },
      {
         title: 'Featureds',
         name: 'featureds',
         type: 'array',
         of: [
            {
               title: 'Featured App',
               name: 'featuredApp',
               type: 'object',
               fields: [
                  {
                     title: 'Title',
                     name: 'title',
                     type: 'boldsBreaksAndSpans',
                  },
                  { title: 'Image', name: 'image', type: 'image' },
                  {
                     title: 'Link',
                     name: 'link',
                     type: 'url',
                  },
                  { title: 'Description', name: 'description', type: 'text' },
               ],

               preview: {
                  prepare() {
                     return {
                        title: `Featured App`,
                     };
                  },
               },
            },
         ],
         validation: Rule => {
            return [
               Rule.required()
                  .min(1)
                  .error('You must have 1 Featured App feilds'),
               Rule.max(3).error(
                  "You can't create more than 3 Featured App feilds"
               ),
            ];
         },
      },
   ],
   preview: {
      prepare() {
         return {
            title: `Featured Apps`,
         };
      },
   },
};
