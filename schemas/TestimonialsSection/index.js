export default {
   title: 'Testimonials',
   name: 'testimonials',
   type: 'document',
   fields: [
      {
         title: 'Title',
         name: 'title',
         type: 'boldsBreaksAndSpans',
      },
   ],
   preview: {
      select: {
         title: 'title',
      },
      prepare(selection) {
         return {
            title: `Product - "${
               !selection.title ? 'Unset' : selection.title
            }"`,
         };
      },
   },
};
