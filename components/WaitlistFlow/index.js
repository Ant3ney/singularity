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

export default function WaitlistFlow() {
	const [step, setStep] = React.useState('identity');

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}, [step]);

	const handleStepChange = nextStep => event => {
		if (event) {
			event.preventDefault();
		}
		setStep(nextStep);
	};

	return (
		<main className={`waitlist-page waitlist-page--${step}`}>
			<div className='waitlist-page__halo' aria-hidden='true'></div>
			{step === 'identity' ? <IdentityStep onSubmit={handleStepChange('confirmation')} /> : null}
			{step === 'confirmation' ? (
				<ConfirmationStep
					onDetails={handleStepChange('details')}
					onSkip={handleStepChange('success')}
				/>
			) : null}
			{step === 'details' ? <DetailsStep onSubmit={handleStepChange('success')} /> : null}
			{step === 'success' ? <SuccessStep /> : null}
		</main>
	);
}

function IdentityStep({ onSubmit }) {
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
					<input type='text' name='name' placeholder='Full Name' />
				</label>
				<label className='waitlist-field'>
					<span>Email Address</span>
					<input type='email' name='email' placeholder='Email Address' />
				</label>
				<label className='waitlist-check'>
					<input type='checkbox' name='mailingList' />
					<span>Join our mailing list for orbital updates</span>
				</label>
				<button className='waitlist-button waitlist-button--primary' type='submit'>
					<span>Join Waitlist</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</form>
			<TransmissionFooter text='Current wait time: ~4 weeks. Quality above all.' />
		</section>
	);
}

function ConfirmationStep({ onDetails, onSkip }) {
	return (
		<section className='waitlist-card waitlist-card--compact' aria-labelledby='waitlist-confirmation-title'>
			<p className='waitlist-kicker'>Step 02 &mdash; Confirmation</p>
			<h1 id='waitlist-confirmation-title' className='waitlist-title'>
				You're on the list.
			</h1>
			<p className='waitlist-copy waitlist-copy--muted waitlist-copy--center'>
				You've successfully joined the waitlist (and our mailing list)
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

function DetailsStep({ onSubmit }) {
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
					<textarea name='projectGoal' placeholder='e.g., Launching a new planetary colonization app...' rows='4'></textarea>
				</Question>
				<Question number='2' label='Who is your target audience?'>
					<textarea name='targetAudience' placeholder='e.g., Interstellar travelers, researchers...' rows='4'></textarea>
				</Question>
				<Question number='3' label='What is your estimated budget range?'>
					<SelectField name='budget' placeholder='Select a magnitude' options={budgetOptions} />
				</Question>
				<Question number='4' label='When do you hope to launch?'>
					<div className='waitlist-icon-field'>
						<FontAwesomeIcon icon={faCalendarAlt} />
						<input type='text' name='timeline' placeholder='e.g., Q3 2025' />
					</div>
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
					<textarea name='branding' placeholder='e.g., Logo, color palette, style guide...' rows='2'></textarea>
				</Question>
				<Question number='8' label='Desired number of pages/screens?'>
					<SelectField name='pageCount' placeholder='Select a range' options={pageOptions} />
				</Question>
				<Question number='9' label='Competitor examples?'>
					<textarea name='competitors' placeholder='e.g., SpaceX, Blue Origin, NASA...' rows='2'></textarea>
				</Question>
				<Question number='10' label='Any specific integrations needed?'>
					<textarea name='integrations' placeholder='e.g., Stripe, Salesforce, Custom API...' rows='2'></textarea>
				</Question>
				<label className='waitlist-check waitlist-check--large'>
					<input type='checkbox' name='detailsMailingList' />
					<span>Join our mailing list for orbital updates and studio news.</span>
				</label>
				<button className='waitlist-button waitlist-button--primary waitlist-button--wide' type='submit'>
					<span>Complete Intake</span>
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

function Question({ number, label, children }) {
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

function SelectField({ name, placeholder, options }) {
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

function RadioGroup({ name, options }) {
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

function TransmissionFooter({ text }) {
	return (
		<div className='waitlist-transmission'>
			<FontAwesomeIcon icon={faHourglassHalf} />
			<span>{text}</span>
		</div>
	);
}
