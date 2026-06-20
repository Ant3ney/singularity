import client from '../config/sanityClient';

export type WaitlistDetailsInput = {
	projectGoal?: string;
	targetAudience?: string;
	budget?: string;
	desiredLaunchDate?: string;
	hosting?: string;
	cms?: string;
	branding?: string;
	pageCount?: string;
	competitors?: string;
	integrations?: string;
};

export type WaitlistEntryInput = WaitlistDetailsInput & {
	name: string;
	email: string;
	mailingList: boolean;
};

type WaitlistEntryResult = { fail: true; message: string } | { fail: false; id: string };

const detailFields = [
	'projectGoal',
	'targetAudience',
	'budget',
	'desiredLaunchDate',
	'hosting',
	'cms',
	'branding',
	'pageCount',
	'competitors',
	'integrations',
] as const satisfies readonly (keyof WaitlistDetailsInput)[];

function clean(value: string | undefined): string {
	return typeof value === 'string' ? value.trim() : '';
}

function buildDetails(input: WaitlistDetailsInput): WaitlistDetailsInput {
	const details: WaitlistDetailsInput = {};

	for (const field of detailFields) {
		const value = clean(input[field]);
		if (value) {
			details[field] = value;
		}
	}

	return details;
}

async function addWaitlistEntry(input: WaitlistEntryInput): Promise<WaitlistEntryResult> {
	const name = clean(input.name);
	const email = clean(input.email);

	if (!name || !email) {
		return { fail: true, message: 'Name and email are required.' };
	}

	const doc = {
		_type: 'waitlistEntry',
		name,
		email,
		mailingList: Boolean(input.mailingList),
		...buildDetails(input),
		status: 'new',
		submittedAt: new Date().toISOString(),
		source: 'website-waitlist',
	};

	const created = await client.create(doc);
	return { fail: false, id: created._id };
}

export async function updateWaitlistEntry(
	id: string,
	input: WaitlistDetailsInput,
): Promise<WaitlistEntryResult> {
	const documentId = clean(id);

	if (!documentId) {
		return { fail: true, message: 'Waitlist entry id is required.' };
	}

	const details = buildDetails(input);

	if (Object.keys(details).length > 0) {
		await client.patch(documentId).set(details).commit();
	}

	return { fail: false, id: documentId };
}

export default addWaitlistEntry;
