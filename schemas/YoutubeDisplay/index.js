export default {
   title: 'Yourtube Display',
   name: 'youtubeDisplay',
   type: 'document',
   fields: [
      {
         title: 'Video ID',
         type: 'string',
         name: 'id',
      },
      {
         title: 'Thumbnail',
         type: 'image',
         name: 'thumbnail',
      },
      {
         title: 'MT',
         type: 'boolean',
         name: 'mt',
         initialValue: true,
      },
      {
         title: 'MB',
         type: 'boolean',
         name: 'mb',
         initialValue: true,
      },
   ],
   preview: {
      prepare() {
         return {
            title: `Youtube Display`,
         };
      },
   },
};
