import type { Metadata } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectForm from './project-form';
import TrackedLink from './tracked-link';
import styles from './real-estate-web-design.module.scss';

const pageUrl = 'https://www.singularityplanet.com/real-estate-web-design';

export const metadata: Metadata = {
	title: 'Real Estate Website Design for Agents | Singularity',
	description:
		'Custom websites for real estate agents, teams, and boutique brokerages. Built to make your brand memorable, your market knowledge useful, and the next step clear.',
	keywords: [
		'real estate website design',
		'realtor website design',
		'luxury real estate website design',
		'custom real estate website design',
		'IDX website design for realtors',
		'Bay Area real estate website design',
	],
	alternates: { canonical: pageUrl },
	robots: { index: true, follow: true },
	openGraph: {
		title: 'Custom Real Estate Websites | Singularity',
		description:
			'Your next client will meet your website before they meet you. Make the introduction count.',
		url: pageUrl,
		siteName: 'Singularity Development',
		type: 'website',
		images: [
			{
				url: 'https://www.singularityplanet.com/assets/images/real-estate/fournier-homepage.webp',
				width: 1440,
				height: 1000,
				alt: 'A custom real estate website designed and built by Singularity',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Custom Real Estate Websites | Singularity',
		description: 'Your next client will meet your website before they meet you.',
		images: ['https://www.singularityplanet.com/assets/images/real-estate/fournier-homepage.webp'],
	},
};

const servicePillars = [
	{
		title: 'Make you recognizable',
		body: 'Your colors are not your brand. Your judgment, voice, taste, and way of working are. We turn those things into a website nobody could mistake for another agent’s.',
	},
	{
		title: 'Make your market useful',
		body: 'Neighborhood pages should not read like Wikipedia. We build a place for the questions, details, and local perspective only an experienced agent can give.',
	},
	{
		title: 'Make the next step easy',
		body: 'Buyers need a way to search. Sellers need a reason to start a conversation. Every page should help the right person know exactly where to go next.',
	},
	{
		title: 'Load quickly on every device',
		body: 'Real estate websites use a lot of photos and video. We build yours to load quickly and work smoothly on phones, tablets, and computers—even after listings and other tools are added.',
	},
];

const processSteps = [
	{
		title: 'Find your angle',
		body: 'We learn how you win trust, where you work, who you serve, and what makes the right client choose you.',
	},
	{
		title: 'Design the feeling',
		body: 'We shape the words, visual direction, and page flow until the site feels unmistakably yours.',
	},
	{
		title: 'Build the path',
		body: 'We connect the site, content, lead capture, analytics, and approved integrations into one working product.',
	},
	{
		title: 'Hand you the keys',
		body: 'The finished website and source are yours. Continued support is available if you want it, never required.',
	},
];

const faqs = [
	{
		question: 'Do you use real estate website templates?',
		answer:
			'No. We design the brand, page system, and interactions around your business. Proven technical patterns may work behind the scenes, but the experience your clients see is custom.',
	},
	{
		question: 'Can you integrate IDX, MLS search, a CRM, or home valuation?',
		answer:
			'Yes. We can design around an approved IDX or home-search provider and connect forms, valuation tools, scheduling, and CRM routing. The exact approach depends on your vendors, account access, and local data rules.',
	},
	{
		question: 'Will the site rank in local search?',
		answer:
			'We build the foundation: clear information architecture, crawlable local content, metadata, structured data, performance, and measurement. No responsible studio can guarantee rankings, and we do not pretend otherwise.',
	},
	{
		question: 'Can you work with agents in San Francisco and Silicon Valley?',
		answer:
			'Yes. Singularity is based in Torrance, California and can collaborate remotely with agents, teams, and boutique brokerages across the Bay Area, the Peninsula, Silicon Valley, and beyond.',
	},
	{
		question: 'What happens after launch?',
		answer:
			'The finished website and source are handed over as part of the completed purchase. We can also help with maintenance, content, new features, and ongoing improvements if you want a continuing partner.',
	},
];

const serviceSchema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	name: 'Custom Real Estate Website Design',
	description: 'Custom websites for real estate agents, teams, and boutique brokerages.',
	url: pageUrl,
	serviceType: 'Real estate website design and development',
	provider: {
		'@type': 'Organization',
		name: 'Singularity Development',
		url: 'https://www.singularityplanet.com',
	},
	areaServed: {
		'@type': 'Country',
		name: 'United States',
	},
	audience: {
		'@type': 'Audience',
		audienceType: 'Real estate agents, teams, and boutique brokerages',
	},
};

const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: faq.answer,
		},
	})),
};

function ArrowIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M5 12h13M13 6l6 6-6 6" />
		</svg>
	);
}

export default function RealEstateWebDesignPage() {
	return (
		<Layout>
			<div className={styles.page}>
				<Nav />
				<main>
					<section className={styles.hero}>
						<div className={styles.heroGlow} aria-hidden="true" />
						<div className={`${styles.container} ${styles.heroGrid}`}>
							<div className={styles.heroCopy}>
								<h1>
									Your next client will meet your <span>website</span> before they meet you.
								</h1>
								<p className={styles.heroLead}>
									Make the introduction count. Singularity builds custom websites for real estate agents, teams, and boutique brokerages—sites that show your taste, share what you know, and make the next step obvious.
								</p>
								<div className={styles.heroActions}>
									<TrackedLink
										href="#start-project"
										className={styles.primaryButton}
										eventName="real_estate_cta_click"
										eventLabel="hero"
									>
										<span>Build my website</span>
										<ArrowIcon />
									</TrackedLink>
									<a href="#live-work" className={styles.secondaryButton}>
										See a live example
									</a>
								</div>
							</div>

							<div className={styles.heroVisual}>
								<div className={styles.orbit} aria-hidden="true" />
								<div className={styles.heroSphere} aria-hidden="true" />
								<figure className={styles.heroPhoto}>
									<Image
										src="/assets/images/real-estate/coastal-home-hero.webp"
										alt="A contemporary home overlooking the water"
										fill
										priority
										sizes="(max-width: 767px) 88vw, (max-width: 1199px) 66vw, 480px"
									/>
								</figure>
								<div className={styles.browserFrame}>
									<div className={styles.browserBar} aria-hidden="true">
										<span />
										<span />
										<span />
									</div>
									<Image
										src="/assets/images/real-estate/fournier-homepage.webp"
										alt="Randi and Stewart Fournier real estate website homepage over an aerial coastal photograph"
										width={1440}
										height={1000}
										priority
										sizes="(max-width: 767px) 92vw, (max-width: 1199px) 78vw, 610px"
									/>
								</div>
								<div className={styles.phoneFrame}>
									<span className={styles.phoneSpeaker} aria-hidden="true" />
									<Image
										src="/assets/images/real-estate/fournier-mobile.webp"
										alt="Mobile homepage for the Randi and Stewart Fournier real estate website"
										width={430}
										height={932}
										sizes="190px"
									/>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.problemSection}>
						<div className={`${styles.container} ${styles.problemGrid}`}>
							<div className={styles.sectionHeading}>
								<h2>Listings are everywhere. Your point of view isn’t.</h2>
							</div>
							<div className={styles.problemCopy}>
								<p className={styles.leadParagraph}>
									Zillow can show the bedrooms. The MLS can show the square footage. Your website has a different job: show people why they should trust you with the move.
								</p>
								<p>
									No borrowed layout. No wall of generic copy. Just your reputation, your market, and a clear reason to start a conversation.
								</p>
							</div>
						</div>
						<div className={`${styles.container} ${styles.problemShowcase}`}>
							<figure className={styles.problemImage}>
								<Image
									src="/assets/images/real-estate/rancho-palos-verdes-coastline.webp"
									alt="Rancho Palos Verdes coastline and oceanfront homes in Southern California"
									fill
									sizes="(max-width: 900px) calc(100vw - 48px), 58vw"
								/>
							</figure>
							<div className={styles.outcomeGrid}>
								<article>
									<h3>Look like the agent they were referred to.</h3>
									<p>Your site should confirm the confidence that sent someone your way.</p>
								</article>
								<article>
									<h3>Turn market knowledge into confidence.</h3>
									<p>Give useful answers before a buyer or seller has to ask for them.</p>
								</article>
								<article>
									<h3>Give every visitor a clear next move.</h3>
									<p>Search, sell, explore, or call—without making people hunt for the path.</p>
								</article>
							</div>
						</div>
					</section>

					<section className={styles.servicesSection}>
						<div className={styles.servicesGlow} aria-hidden="true" />
						<div className={styles.container}>
							<div className={`${styles.sectionHeading} ${styles.servicesHeading}`}>
								<h2>What should a great real estate website actually do?</h2>
								<p>
									It should be beautiful, yes. It should also earn trust quickly, answer local questions, and turn attention into conversation.
								</p>
							</div>
							<div className={styles.servicesLayout}>
								<div className={styles.servicesMedia}>
									<figure className={styles.servicePhoto}>
										<Image
											src="/assets/images/real-estate/modern-kitchen-interior.webp"
											alt="A bright modern kitchen and open-plan living space"
											fill
											sizes="(max-width: 900px) calc(100vw - 48px), 42vw"
										/>
									</figure>
									<figure className={styles.serviceScreenshot}>
										<Image
											src="/assets/images/real-estate/fournier-home-valuation.webp"
											alt="Home valuation section from a website built by Singularity"
											width={1440}
											height={1000}
											sizes="(max-width: 767px) 72vw, 360px"
										/>
									</figure>
								</div>
								<div className={styles.serviceGrid}>
									{servicePillars.map((pillar) => (
										<article className={styles.serviceCard} key={pillar.title}>
											<h3>{pillar.title}</h3>
											<p>{pillar.body}</p>
										</article>
									))}
								</div>
							</div>
						</div>
					</section>

					<section className={styles.proofSection} id="live-work">
						<div className={styles.proofStars} aria-hidden="true" />
						<div className={styles.container}>
							<div className={styles.proofIntro}>
								<div>
									<h2>See a real estate website we built.</h2>
								</div>
								<div className={styles.proofDescription}>
									<p>
										We built this website for Randi &amp; Stewart Fournier. It introduces their team, shows the areas they serve, and helps visitors browse neighborhoods, search for homes, or request a home valuation.
									</p>
									<p>Every image below is a screenshot from the deployed website.</p>
									<TrackedLink
										href="https://stewart-and-randi-website.vercel.app"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.liveLink}
										eventName="case_study_view"
										eventLabel="randi_and_stewart_live_site"
									>
										Visit the live website <span aria-hidden="true">↗</span>
									</TrackedLink>
								</div>
							</div>

							<div className={styles.proofGallery}>
								<figure className={styles.proofHeroImage}>
									<Image
										src="/assets/images/real-estate/fournier-homepage.webp"
										alt="Desktop homepage of the live Randi and Stewart Fournier real estate website"
										width={1440}
										height={1000}
										sizes="(max-width: 767px) 100vw, 68vw"
									/>
								</figure>
								<figure className={styles.proofMobileImage}>
									<Image
										src="/assets/images/real-estate/fournier-mobile.webp"
										alt="Mobile view of the live Randi and Stewart Fournier real estate website"
										width={430}
										height={932}
										sizes="(max-width: 767px) 58vw, 260px"
									/>
								</figure>
								<figure className={styles.proofValuationImage}>
									<Image
										src="/assets/images/real-estate/fournier-home-valuation.webp"
										alt="Home valuation call to action on the live Randi and Stewart Fournier website"
										width={1440}
										height={1000}
										sizes="(max-width: 767px) 100vw, 46vw"
									/>
								</figure>
								<figure className={styles.proofStoryImage}>
									<Image
										src="/assets/images/real-estate/fournier-brand-story.webp"
										alt="Brand story transition on the live Randi and Stewart Fournier website reading What people remember"
										width={1440}
										height={1000}
										sizes="(max-width: 767px) 100vw, 46vw"
									/>
								</figure>
							</div>
						</div>
					</section>

					<section className={styles.marketSection}>
						<div className={`${styles.container} ${styles.marketGrid}`}>
							<figure className={styles.marketVisual}>
								<Image
									src="/assets/images/real-estate/palos-verdes-coast.webp"
									alt="Homes along the Rancho Palos Verdes coastline in Southern California"
									fill
									sizes="(max-width: 900px) calc(100vw - 48px), 42vw"
								/>
							</figure>
							<div className={styles.sectionHeading}>
								<h2>Show people you know the areas you serve.</h2>
								<p>
									People looking for an agent want someone who understands their city and neighborhoods. We organize your website so they can easily find useful local information and answers to common questions.
								</p>
								<p>
									Singularity is based in Torrance, California. We work remotely with real estate professionals in San Francisco, Silicon Valley, the Peninsula, and other markets.
								</p>
							</div>
						</div>
					</section>

					<section className={styles.processSection}>
						<div className={styles.container}>
							<div className={`${styles.sectionHeading} ${styles.processHeading}`}>
								<div>
									<h2>No mystery. No disappearing act.</h2>
								</div>
								<p>You work directly with the people doing the work. You’ll know what we’re making, why it matters, and what comes next.</p>
							</div>
							<ol className={styles.processList}>
								{processSteps.map((step) => (
									<li key={step.title}>
										<h3>{step.title}</h3>
										<p>{step.body}</p>
									</li>
								))}
							</ol>
						</div>
					</section>

					<section className={styles.inquirySection} id="start-project">
						<div className={`${styles.container} ${styles.inquiryGrid}`}>
							<div className={styles.inquiryCopy}>
								<h2>Let’s make your referral look smart.</h2>
								<p>
									Tell us who you serve, what feels wrong with your current site, and what you want the new one to make possible. We’ll read it, think about it, and reply personally.
								</p>
							</div>
							<ProjectForm />
						</div>
					</section>

					<section className={styles.faqSection}>
						<div className={`${styles.container} ${styles.faqGrid}`}>
							<div className={`${styles.sectionHeading} ${styles.faqHeading}`}>
								<h2>A few things worth knowing.</h2>
								<p>If your question isn’t here, use the form. You’ll hear from us—not a bot.</p>
								<a href="#start-project" className={styles.textLink}>Start a conversation <span aria-hidden="true">→</span></a>
							</div>
							<div className={styles.faqList}>
								{faqs.map((faq, index) => (
									<details key={faq.question} open={index === 0}>
										<summary>{faq.question}<span aria-hidden="true">+</span></summary>
										<p>{faq.answer}</p>
									</details>
								))}
							</div>
						</div>
					</section>

					<section className={styles.closingSection}>
							<Image
								src="/assets/images/real-estate/modern-home-twilight.webp"
								alt=""
								fill
								className={styles.closingImage}
							sizes="100vw"
						/>
						<div className={`${styles.container} ${styles.closingInner}`}>
							<h2>Your name is already the brand.<br /><span>Let’s build the website that proves it.</span></h2>
							<a href="#start-project" className={styles.closingButton}>Start a project <ArrowIcon /></a>
						</div>
					</section>
				</main>
				<Footer />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
				/>
			</div>
		</Layout>
	);
}
