import { NextResponse } from 'next/server';
import addWaitlistEntry, {
	updateWaitlistEntry,
	type WaitlistDetailsInput,
	type WaitlistEntryInput,
} from '@/api/addWaitlistEntry';

type WaitlistPayload = Record<string, unknown>;

function asString(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

function asBoolean(value: unknown): boolean {
	return value === true || value === 'true' || value === 'on';
}

function getDetails(payload: WaitlistPayload): WaitlistDetailsInput {
	return {
		projectGoal: asString(payload.projectGoal),
		targetAudience: asString(payload.targetAudience),
		budget: asString(payload.budget),
		desiredLaunchDate: asString(payload.desiredLaunchDate),
		hosting: asString(payload.hosting),
		cms: asString(payload.cms),
		branding: asString(payload.branding),
		pageCount: asString(payload.pageCount),
		competitors: asString(payload.competitors),
		integrations: asString(payload.integrations),
	};
}

export async function POST(request: Request) {
	try {
		const payload = (await request.json()) as WaitlistPayload;
		const entry: WaitlistEntryInput = {
			name: asString(payload.name),
			email: asString(payload.email),
			mailingList: asBoolean(payload.mailingList),
			...getDetails(payload),
		};

		const result = await addWaitlistEntry(entry);
		if (result.fail === true) {
			return NextResponse.json(result, { status: 400 });
		}

		return NextResponse.json({ fail: false, id: result.id });
	} catch (error) {
		console.error('Waitlist submission failed:', error);
		return NextResponse.json(
			{ fail: true, message: 'Waitlist submission failed.' },
			{ status: 500 },
		);
	}
}

export async function PATCH(request: Request) {
	try {
		const payload = (await request.json()) as WaitlistPayload;
		const result = await updateWaitlistEntry(asString(payload.id), getDetails(payload));

		if (result.fail === true) {
			return NextResponse.json(result, { status: 400 });
		}

		return NextResponse.json({ fail: false, id: result.id });
	} catch (error) {
		console.error('Waitlist detail update failed:', error);
		return NextResponse.json(
			{ fail: true, message: 'Waitlist detail update failed.' },
			{ status: 500 },
		);
	}
}
