const sanityClient = require('@sanity/client');

const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_EMAIL_SANITY_ID,
	dataset: 'production',
	apiVersion: '2021-09-07', // use current UTC date - see "specifying API version"!
	useCdn: true, // `false` if you want to ensure fresh data
	token: 'skEZ0re4c0Me85gi74Ll3owL2LZRYkhELQgFTXHCPnopDFr6rg8lxUWgMgCqmL81t96tsmYgtVWWrDlFGUZ152OMwDBo3OGgr0Na0BnpnweNUbGLLciIBHwI6ofqnXDYw7dKdB9ZLrhTxkU3sWG3jr2IcNiYh3KRQEmpIpzakkGWzY3kDTPq'
});

export default client;
