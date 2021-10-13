import client from '../config/sanityClient';

export default function getBodyData(route) {
   /* Note, route must be properly formated before calling this function */
   /* expecting '/route' */

   if (!route) {
      return Promise.reject({
         message: 'Canot run get page data API without specigying a page',
      });
   }

   const query = `*[_type == "page" && routeName == "${route}"]{ ..., sections}`;
   return new Promise((resolve, reject) => {
      client
         .fetch(query)
         .then(pages => {
            if (pages.length <= 0) {
               console.log(`pages.length  <= 0`);
               reject({
                  hasFailed: true,
                  message: 'Query returned no results',
               });
            }
            resolve(pages);
         })
         .catch(err => {
            console.log(err);
            reject({ hasFailed: true, error: err });
         });
   });
}
