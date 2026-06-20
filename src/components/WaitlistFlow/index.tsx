'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faCalendarAlt,
	faChevronDown,
	faHourglassHalf,
} from '@fortawesome/free-solid-svg-icons';

const budgetOptions = [
	'Under $5,000',
	'$5,000 - $10,000',
	'$10,000 - $25,000',
	'$25,000 - $50,000',
	'$50,000+',
];

const pageOptions = ['1 - 3', '4 - 7', '8 - 12', '13 - 20', '20+'];

type WaitlistStep = 'identity' | 'confirmation' | 'details' | 'success';
type SubmittingStep = 'identity' | 'details' | null;

type WaitlistResponse = {
	fail?: boolean;
	id?: string;
	message?: string;
};

function getFormString(formData: FormData, name: string): string {
	const value = formData.get(name);
	return typeof value === 'string' ? value.trim() : '';
}

async function readWaitlistResponse(response: Response): Promise<WaitlistResponse> {
	try {
		return (await response.json()) as WaitlistResponse;
	} catch {
		return { fail: true };
	}
}

function getWaitlistEndpoint(): string {
	if (typeof window === 'undefined') {
		return '/api/waitlist';
	}

	return new URL('/api/waitlist', window.location.origin).toString();
}

async function submitWaitlistRequest(method: 'POST' | 'PATCH', payload: Record<string, unknown>) {
	const response = await fetch(getWaitlistEndpoint(), {
		method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
		cache: 'no-store',
		credentials: 'same-origin',
	});
	const result = await readWaitlistResponse(response);

	if (!response.ok || result.fail) {
		throw new Error(result.message || `Waitlist request failed with status ${response.status}.`);
	}

	return result;
}

function getSubmissionErrorMessage(error: unknown, fallback: string): string {
	if (error instanceof TypeError) {
		return 'This device could not reach the waitlist API. Refresh the page and try again.';
	}

	if (error instanceof Error && error.message) {
		return error.message;
	}

	return fallback;
}

export default function WaitlistFlow() {
	const [step, setStep] = React.useState<WaitlistStep>('identity');
	const [entryId, setEntryId] = React.useState<string | null>(null);
	const [mailingList, setMailingList] = React.useState(false);
	const [submittingStep, setSubmittingStep] = React.useState<SubmittingStep>(null);
	const [error, setError] = React.useState<string | null>(null);

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}, [step]);

	const handleStepChange =
		(nextStep: WaitlistStep) => (event?: React.MouseEvent<HTMLButtonElement>) => {
			if (event) {
				event.preventDefault();
			}

			setError(null);
			setStep(nextStep);
		};

	const handleIdentitySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const payload = {
			name: getFormString(formData, 'name'),
			email: getFormString(formData, 'email'),
			mailingList: formData.get('mailingList') === 'on',
		};

		if (!payload.name || !payload.email) {
			setError('Please add your name and email before joining the waitlist.');
			return;
		}

		setSubmittingStep('identity');
		setError(null);

		try {
			const result = await submitWaitlistRequest('POST', payload);
			if (!result.id) {
				throw new Error('The waitlist entry was not created. Please try again.');
			}

			setEntryId(result.id);
			setMailingList(payload.mailingList);
			setStep('confirmation');
		} catch (submissionError) {
			console.error('Waitlist submission failed:', submissionError);
			setError(
				getSubmissionErrorMessage(
					submissionError,
					'We could not submit your waitlist request. Please try again.',
				),
			);
		} finally {
			setSubmittingStep(null);
		}
	};

	const handleDetailsSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!entryId) {
			setError('Please join the waitlist before sending project details.');
			setStep('identity');
			return;
		}

		const formData = new FormData(event.currentTarget);
		const payload = {
			id: entryId,
			projectGoal: getFormString(formData, 'projectGoal'),
			targetAudience: getFormString(formData, 'targetAudience'),
			budget: getFormString(formData, 'budget'),
			desiredLaunchDate: getFormString(formData, 'desiredLaunchDate'),
			hosting: getFormString(formData, 'hosting'),
			cms: getFormString(formData, 'cms'),
			branding: getFormString(formData, 'branding'),
			pageCount: getFormString(formData, 'pageCount'),
			competitors: getFormString(formData, 'competitors'),
			integrations: getFormString(formData, 'integrations'),
		};

		setSubmittingStep('details');
		setError(null);

		try {
			await submitWaitlistRequest('PATCH', payload);

			setStep('success');
		} catch (submissionError) {
			console.error('Waitlist detail update failed:', submissionError);
			setError(
				getSubmissionErrorMessage(
					submissionError,
					'We could not save your project details. Please try again.',
				),
			);
		} finally {
			setSubmittingStep(null);
		}
	};

	return (
		<main className={`waitlist-page waitlist-page--${step}`}>
			<div className='waitlist-page__halo' aria-hidden='true'></div>
			{step === 'identity' ? (
				<IdentityStep
					error={error}
					isSubmitting={submittingStep === 'identity'}
					onSubmit={handleIdentitySubmit}
				/>
			) : null}
			{step === 'confirmation' ? (
				<ConfirmationStep
					mailingList={mailingList}
					onDetails={handleStepChange('details')}
					onSkip={handleStepChange('success')}
				/>
			) : null}
			{step === 'details' ? (
				<DetailsStep
					error={error}
					isSubmitting={submittingStep === 'details'}
					onSubmit={handleDetailsSubmit}
				/>
			) : null}
			{step === 'success' ? <SuccessStep /> : null}
		</main>
	);
}

type IdentityStepProps = {
	error: string | null;
	isSubmitting: boolean;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function IdentityStep({ error, isSubmitting, onSubmit }: IdentityStepProps) {
	return (
		<section className='waitlist-card waitlist-card--compact' aria-labelledby='waitlist-identity-title'>
			<p className='waitlist-kicker'>Step 01 &mdash; Identity</p>
			<h1 id='waitlist-identity-title' className='waitlist-title'>
				Excellence Takes Time.
			</h1>
			<p className='waitlist-copy waitlist-copy--center'>
				We limit our active client list to ensure every project receives our undivided
				attention and legendary craft. Join our waitlist to secure your place in our
				development cycle.
			</p>
			<form className='waitlist-form' onSubmit={onSubmit}>
				<label className='waitlist-field'>
					<span>Full Name</span>
					<input type='text' name='name' placeholder='Full Name' required />
				</label>
				<label className='waitlist-field'>
					<span>Email Address</span>
					<input type='email' name='email' placeholder='Email Address' required />
				</label>
				<label className='waitlist-check'>
					<input type='checkbox' name='mailingList' />
					<span>Join our mailing list for orbital updates</span>
				</label>
				{error ? <p className='waitlist-error' role='alert'>{error}</p> : null}
				<button className='waitlist-button waitlist-button--primary' type='submit' disabled={isSubmitting}>
					<span>{isSubmitting ? 'Joining...' : 'Join Waitlist'}</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</form>
			<TransmissionFooter text='Current wait time: 5+ months. Quality above all.' />
		</section>
	);
}

type ConfirmationStepProps = {
	mailingList: boolean;
	onDetails: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function ConfirmationStep({ mailingList, onDetails, onSkip }: ConfirmationStepProps) {
	return (
		<section className='waitlist-card waitlist-card--compact' aria-labelledby='waitlist-confirmation-title'>
			<p className='waitlist-kicker'>Step 02 &mdash; Confirmation</p>
			<h1 id='waitlist-confirmation-title' className='waitlist-title'>
				You're on the list.
			</h1>
			<p className='waitlist-copy waitlist-copy--muted waitlist-copy--center'>
				{mailingList
					? "You've successfully joined the waitlist (and our mailing list)."
					: "You've successfully joined the waitlist."}
			</p>
			<p className='waitlist-copy waitlist-copy--center waitlist-copy--narrow'>
				Want to jump-start your project? Fill out a few more details now to secure
				your spot in our upcoming development cycle.
			</p>
			<div className='waitlist-actions'>
				<button className='waitlist-button waitlist-button--primary' type='button' onClick={onDetails}>
					<span>Provide Details</span>
				</button>
				<button className='waitlist-button waitlist-button--secondary' type='button' onClick={onSkip}>
					<span>Skip for now</span>
				</button>
			</div>
			<TransmissionFooter text='Transmission confirmed. Stand by for further coordinates.' />
		</section>
	);
}

type DetailsStepProps = {
	error: string | null;
	isSubmitting: boolean;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function DetailsStep({ error, isSubmitting, onSubmit }: DetailsStepProps) {
	return (
		<section className='waitlist-card waitlist-card--wide' aria-labelledby='waitlist-details-title'>
			<p className='waitlist-kicker'>Step 03 &mdash; Project Details</p>
			<h1 id='waitlist-details-title' className='waitlist-title waitlist-title--large'>
				Tell us about your project.
			</h1>
			<p className='waitlist-copy waitlist-copy--intro'>
				These details help us shape the right scope, timeline, and technical plan for
				your mission.
			</p>
			<form className='waitlist-intake' onSubmit={onSubmit}>
				<Question number='1' label='What is the primary goal of your project?'>
					<textarea name='projectGoal' placeholder='e.g., Launching a new planetary colonization app...' rows={4}></textarea>
				</Question>
				<Question number='2' label='Who is your target audience?'>
					<textarea name='targetAudience' placeholder='e.g., Interstellar travelers, researchers...' rows={4}></textarea>
				</Question>
				<Question number='3' label='What is your estimated budget range?'>
					<SelectField name='budget' placeholder='Select a magnitude' options={budgetOptions} />
				</Question>
				<Question number='4' label='When do you hope to launch?'>
					<DateField />
				</Question>
				<Question number='5' label='Do you need hosting?'>
					<RadioGroup
						name='hosting'
						options={[
							'Yes, please manage infrastructure',
							'No, I have my own servers',
						]}
					/>
				</Question>
				<Question number='6' label='Do you need a GUI/CMS to edit your app?'>
					<RadioGroup
						name='cms'
						options={[
							'Yes, I need to manage content',
							'No, static content is fine',
						]}
					/>
				</Question>
				<Question number='7' label='Do you have existing branding?'>
					<textarea name='branding' placeholder='e.g., Logo, color palette, style guide...' rows={2}></textarea>
				</Question>
				<Question number='8' label='Desired number of pages/screens?'>
					<SelectField name='pageCount' placeholder='Select a range' options={pageOptions} />
				</Question>
				<Question number='9' label='Competitor examples?'>
					<textarea name='competitors' placeholder='e.g., SpaceX, Blue Origin, NASA...' rows={2}></textarea>
				</Question>
				<Question number='10' label='Any specific integrations needed?'>
					<textarea name='integrations' placeholder='e.g., Stripe, Salesforce, Custom API...' rows={2}></textarea>
				</Question>
				{error ? <p className='waitlist-error waitlist-error--wide' role='alert'>{error}</p> : null}
				<button
					className='waitlist-button waitlist-button--primary waitlist-button--wide'
					type='submit'
					disabled={isSubmitting}
				>
					<span>{isSubmitting ? 'Completing...' : 'Complete Intake'}</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</form>
			<TransmissionFooter text='Intake ready. Transmission pending review.' />
		</section>
	);
}

function SuccessStep() {
	return (
		<section className='waitlist-card waitlist-card--success' aria-labelledby='waitlist-success-title'>
			<p className='waitlist-kicker'>Intake Received</p>
			<h1 id='waitlist-success-title' className='waitlist-title waitlist-title--success'>
				Thank you.
			</h1>
			<p className='waitlist-copy waitlist-copy--success waitlist-copy--muted'>
				We appreciate you taking the time to share the details of your project.
			</p>
			<p className='waitlist-copy waitlist-copy--success'>
				Your waitlist form and project intake have been received successfully. Our team
				will review your submission carefully and reach out when the next opening aligns
				with your goals.
			</p>
			<p className='waitlist-copy waitlist-copy--success waitlist-copy--muted'>
				We're excited about what we can build together.
			</p>
			<a className='waitlist-button waitlist-button--primary waitlist-button--home' href='/'>
				<span>Return Home</span>
				<FontAwesomeIcon icon={faArrowRight} />
			</a>
			<TransmissionFooter text='Thank you. Stand by for further coordinates.' />
		</section>
	);
}

function DateField() {
	const inputRef = React.useRef<HTMLInputElement>(null);

	const openPicker = () => {
		const input = inputRef.current;
		if (!input) return;

		input.focus();
		input.showPicker?.();
	};

	return (
		<div
			className='waitlist-icon-field'
			onClick={openPicker}
			onKeyDown={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					openPicker();
				}
			}}
			role='button'
			tabIndex={0}
		>
			<FontAwesomeIcon icon={faCalendarAlt} />
			<input ref={inputRef} type='date' name='desiredLaunchDate' aria-label='Desired launch date' />
		</div>
	);
}

type QuestionProps = {
	number: string;
	label: string;
	children: React.ReactNode;
};

function Question({ number, label, children }: QuestionProps) {
	return (
		<div className='waitlist-question'>
			<div className='waitlist-question__number'>{number}</div>
			<div className='waitlist-question__body'>
				<label className='waitlist-question__label'>{label}</label>
				{children}
			</div>
		</div>
	);
}

type SelectFieldProps = {
	name: string;
	placeholder: string;
	options: string[];
};

function SelectField({ name, placeholder, options }: SelectFieldProps) {
	return (
		<div className='waitlist-select'>
			<select name={name} defaultValue=''>
				<option value='' disabled>
					{placeholder}
				</option>
				{options.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<FontAwesomeIcon icon={faChevronDown} />
		</div>
	);
}

type RadioGroupProps = {
	name: string;
	options: string[];
};

function RadioGroup({ name, options }: RadioGroupProps) {
	return (
		<div className='waitlist-radio-group'>
			{options.map(option => (
				<label className='waitlist-radio' key={option}>
					<input type='radio' name={name} value={option} />
					<span>{option}</span>
				</label>
			))}
		</div>
	);
}

type TransmissionFooterProps = {
	text: string;
};

function TransmissionFooter({ text }: TransmissionFooterProps) {
	return (
		<div className='waitlist-transmission'>
			<FontAwesomeIcon icon={faHourglassHalf} />
			<span>{text}</span>
		</div>
	);
}
