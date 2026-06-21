import client from 'config/sanityClient';

export default function getProduct(
   productSlug = 'singularity-functional-site'
) {
   let schemaType = 'product';
   const query = `*[_type == "${schemaType}" && generalInfo.slug.current == "${productSlug}"]`;
   return new Promise(resolve => {
      client
         .fetch(query)
         .then(product => {
            if (product) product = product[0];
            let resolvedData = [
               {
                  sections: [{ _type: schemaType, ...product }],
               },
            ]; //Its formated this way do to an artitifact in arcitecture
            resolve(resolvedData);
         })
         .catch(err => {
            console.log(`failed`);
            console.log(err);
            resolve({ hasFailed: true, err: err });
         });
   });
}
