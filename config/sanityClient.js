const sanityClient = require('@sanity/client');

const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_EMAIL_SANITY_ID,
	dataset: 'production',
	apiVersion: '2021-09-07', // use current UTC date - see "specifying API version"!
	useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
