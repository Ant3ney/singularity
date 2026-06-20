import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_EMAIL_SANITY_ID,
	dataset: 'production',
	apiVersion: '2026-06-19',
	useCdn: !token,
	token,
});

export default client;
