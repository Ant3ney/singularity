import client from '../config/sanityClient'; // write-enabled client

async function addContactFormEntry(name, email, message) {
  if (!email || !message) {
	  return { fail: true };
  }

  const doc = {
    _type: 'contactUsEntry',
    name: name || '',
    email,
    message,
    read: false,
  };

  return await client.create(doc);
}

export default addContactFormEntry;
