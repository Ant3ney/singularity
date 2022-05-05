import client from '../config/sanityClient';

export default function getProductsData() {
	//Prock Update
	/* Note, route must be properly formated before calling this function */
	/* expecting '/route' */

	//TODO when this is all working, make newProductSchema just porduct
	const query = `*[_type == "product"]{ ...,}`;
	return new Promise((resolve, reject) => {
		client
			.fetch(query)
			.then(pages => {
				if (pages.length <= 0) {
					console.log(`pages.length  <= 0`);
					resolve({
						hasFailed: true,
						message: 'Query returned no results',
					});
				}
				console.log('pages', pages);
				resolve(pages);
			})
			.catch(err => {
				console.log(err);
				resolve({ hasFailed: true, error: err });
			});
	});
}
