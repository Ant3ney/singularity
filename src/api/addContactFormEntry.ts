import client from '../config/sanityClient'; // write-enabled client

type ContactFormResult = { fail: true } | { fail: false };

async function addContactFormEntry(name: string | null, email: string, message: string): Promise<ContactFormResult> {
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

  await client.create(doc);
  return { fail: false };
}

export default addContactFormEntry;
