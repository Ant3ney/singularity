import { NextResponse } from 'next/server';
import addWaitlistEntry, {
	updateWaitlistEntry,
	type WaitlistDetailsInput,
	type WaitlistEntryInput,
} from '@/api/addWaitlistEntry';

type WaitlistPayload = Record<string, unknown>;

const publicApiHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'OPTIONS, POST, PATCH',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Max-Age': '86400',
};

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

function getErrorMessage(error: unknown, fallback: string): string {
	if (process.env.NODE_ENV !== 'production' && error instanceof Error && error.message) {
		return error.message;
	}

	return fallback;
}

function publicJson(body: unknown, status = 200) {
	return NextResponse.json(body, {
		status,
		headers: publicApiHeaders,
	});
}

export function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: publicApiHeaders,
	});
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
			return publicJson(result, 400);
		}

		return publicJson({ fail: false, id: result.id });
	} catch (error) {
		console.error('Waitlist submission failed:', error);
		return publicJson(
			{ fail: true, message: getErrorMessage(error, 'Waitlist submission failed.') },
			500,
		);
	}
}

export async function PATCH(request: Request) {
	try {
		const payload = (await request.json()) as WaitlistPayload;
		const result = await updateWaitlistEntry(asString(payload.id), getDetails(payload));

		if (result.fail === true) {
			return publicJson(result, 400);
		}

		return publicJson({ fail: false, id: result.id });
	} catch (error) {
		console.error('Waitlist detail update failed:', error);
		return publicJson(
			{ fail: true, message: getErrorMessage(error, 'Waitlist detail update failed.') },
			500,
		);
	}
}
