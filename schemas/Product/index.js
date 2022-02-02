export default {
   title: 'Product',
   name: 'product',
   type: 'document',
   fields: [
      {
         title: 'General Info',
         name: 'generalInfo',
         type: 'generalProductInfo',
      },
      {
         title: 'Landing Product Banner',
         name: 'landingProductBanner',
         type: 'landingScreen',
      },
      {
         title: 'Pricing and Content',
         name: 'pricingAndContent',
         type: 'array',
         of: [
            {
               title: 'Component List',
               name: 'componentList',
               type: 'productComponentList',
            },
            {
               title: 'Pricing Table',
               name: 'priceTable',
               type: 'priceTable',
            },
         ],
      },
      {
         title: 'Tecnical Debt Policy',
         name: 'tecnicalDebtPolicy',
         type: 'productsBanner',
      },
   ],
   preview: {
      select: {
         title: 'generalInfo',
      },
      prepare(selection) {
         return {
            title: `Product - "${
               !selection.title && selection.title.title
                  ? 'Unset'
                  : selection.title.title
            }"`,
         };
      },
   },
};
