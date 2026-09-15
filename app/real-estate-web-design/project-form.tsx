'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './real-estate-web-design.module.scss';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ProjectForm() {
	const [status, setStatus] = useState<FormStatus>('idle');

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus('submitting');

		const form = event.currentTarget;
		const formData = new FormData(form);
		const honeypot = String(formData.get('company') || '');

		if (honeypot) {
			setStatus('success');
			return;
		}

		const name = String(formData.get('name') || '').trim();
		const email = String(formData.get('email') || '').trim();
		const website = String(formData.get('website') || '').trim();
		const businessType = String(formData.get('businessType') || '').trim();
		const primaryGoal = String(formData.get('primaryGoal') || '').trim();

		const message = [
			'Real estate website project inquiry',
			'',
			`Current website: ${website || 'Not provided'}`,
			`Business type: ${businessType || 'Not specified'}`,
			`What they want the website to do: ${primaryGoal || 'Not specified'}`,
		].join('\n');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message }),
			});
			const result = await response.json();

			if (!response.ok || result.fail) {
				throw new Error('The request could not be recorded.');
			}

			try {
				if (typeof window.gtag === 'function') {
					window.gtag('event', 'real_estate_project_inquiry', {
						form_name: 'real_estate_project_form',
						page_path: '/real-estate-web-design',
					});
				}
				if (typeof window.gtag_report_conversion === 'function') {
					window.gtag_report_conversion();
				}
			} catch (trackingError) {
				console.warn('Project inquiry analytics could not be recorded:', trackingError);
			}

			form.reset();
			setStatus('success');
		} catch (error) {
			console.error('Project inquiry failed:', error);
			setStatus('error');
		}
	}

	if (status === 'success') {
		return (
			<div className={styles.formSuccess} role="status" aria-live="polite">
				<h3>Thanks. We’ll be in touch.</h3>
				<p>
					A real person from Singularity will read your note and reply with a useful next step.
				</p>
				<button className={styles.textButton} type="button" onClick={() => setStatus('idle')}>
					Send another message
				</button>
			</div>
		);
	}

	return (
		<form className={styles.projectForm} onSubmit={handleSubmit}>
			<div className={styles.formHeading}>
				<h3>Tell us what you want to build.</h3>
			</div>

			<div className={styles.fieldGrid}>
				<label className={styles.field}>
					<span>Name</span>
					<input name="name" type="text" autoComplete="name" placeholder="Your name" required />
				</label>
				<label className={styles.field}>
					<span>Work email</span>
					<input name="email" type="email" autoComplete="email" placeholder="you@yourbrand.com" required />
				</label>
			</div>

			<label className={styles.field}>
				<span>Current website (optional)</span>
				<input
					name="website"
					type="text"
					inputMode="url"
					autoComplete="url"
					placeholder="yourwebsite.com"
				/>
			</label>

			<label className={styles.field}>
				<span>I’m building for</span>
				<select name="businessType" defaultValue="Agent">
					<option>Agent</option>
					<option>Real estate team</option>
					<option>Boutique brokerage</option>
				</select>
			</label>

			<label className={styles.field}>
				<span>What should your website do?</span>
				<textarea
					name="primaryGoal"
					rows={4}
					placeholder="For example: win more listings, show our neighborhoods better, or replace a template site."
					required
				/>
			</label>

			<label className={styles.honeypot} aria-hidden="true">
				Company
				<input name="company" type="text" tabIndex={-1} autoComplete="off" />
			</label>

			<button className={styles.submitButton} type="submit" disabled={status === 'submitting'}>
				<span>{status === 'submitting' ? 'Sending…' : 'Start the conversation'}</span>
				<span className={styles.buttonArrow} aria-hidden="true">↗</span>
			</button>

			<p className={styles.formFinePrint}>A real person reads every message.</p>

			{status === 'error' && (
				<p className={styles.formError} role="alert">
					Something went wrong. Email us directly at{' '}
					<a href="mailto:anthonycavuoti@gmail.com">anthonycavuoti@gmail.com</a>.
				</p>
			)}
		</form>
	);
}
