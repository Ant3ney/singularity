import { createClient } from '@sanity/client';

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_EMAIL_SANITY_ID,
	dataset: 'production',
	apiVersion: '2021-09-07', // use current UTC date - see "specifying API version"!
	useCdn: true, // `false` if you want to ensure fresh data
	token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
});

export default client;
