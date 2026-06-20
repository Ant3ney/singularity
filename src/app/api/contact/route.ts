import { NextResponse } from 'next/server';
import addContactFormEntry from '@/api/addContactFormEntry';

type ContactPayload = {
	name?: unknown;
	email?: unknown;
	message?: unknown;
};

export async function POST(request: Request) {
	try {
		const payload = (await request.json()) as ContactPayload;
		const name = typeof payload.name === 'string' ? payload.name : null;
		const email = typeof payload.email === 'string' ? payload.email : '';
		const message = typeof payload.message === 'string' ? payload.message : '';

		const result = await addContactFormEntry(name, email, message);
		if (result.fail) {
			return NextResponse.json({ fail: true }, { status: 400 });
		}

		return NextResponse.json({ fail: false });
	} catch (error) {
		console.error('Contact form submission failed:', error);
		return NextResponse.json({ fail: true }, { status: 500 });
	}
}
