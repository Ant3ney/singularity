export default {
   title: 'Bolds Breaks and Spans',
   name: 'boldsBreaksAndSpans',
   type: 'array',
   of: [
      {
         name: 'bold',
         title: 'Bold',
         type: 'object',
         fields: [{ title: 'title', name: 'title', type: 'string' }],
      },
      {
         name: 'break',
         title: 'Break',
         type: 'object',
         fields: [
            {
               title: 'Break',
               name: 'break',
               type: 'boolean',
               readOnly: true,
               initialValue: true,
            },
         ],
      },
      {
         name: 'span',
         title: 'Span',
         type: 'object',
         fields: [{ title: 'title', name: 'title', type: 'string' }],
      },
   ],
};
