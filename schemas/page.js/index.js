export default {
   title: 'Page',
   name: 'page',
   type: 'document',
   fields: [
      { title: 'Display Name', name: 'displayName', type: 'string' },
      { title: 'Route Name', name: 'routeName', type: 'string' },
      {
         title: 'Sections',
         name: 'sections',
         type: 'array',
         of: [
            { type: 'landingScreen' },
            { type: 'testimonials' },
            { type: 'featuredApps' },
            { type: 'contactUs' },
            { type: 'socialContacts' },
            { type: 'productsDisplay' },
            { type: 'productsBanner' },
            {
               type: 'youtubeDisplay',
            },
         ],
      },
   ],
};
