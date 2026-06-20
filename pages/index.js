import React from 'react';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import FeaturedApps from '../components/FeaturedApps';
import Testimonial from '../components/Testimonial';
import ContactUs from '../components/ContactUs';
import Video from '../components/Video';
import Footer from '../components/Footer';

const landingPage = {
	banner: {
		title: [
			{ type: 'span', text: 'We Make Building your ' },
			{ type: 'bold', text: 'Website' },
			{ type: 'span', text: ' Fun and Easy' },
		],
		displayImage:
			'https://cdn.sanity.io/images/2a4pwebi/production/1974aa80236f2e780a792eb51d1722f45788ef78-443x742.png',
		subtitle: [
			{ type: 'span', text: 'Do you need a website with guaranteed great quality?' },
			{ type: 'break', text: true },
			{ type: 'span', text: 'Are there specific requirements you need in your site?' },
		],
	},
	featuredApps: {
		title: [
			{ type: 'bold', text: 'Websites ' },
			{ type: 'span', text: ' Built by Us' },
		],
		featureds: [
			{
				title: [{ type: 'bold', text: 'Del Aire Baptist Church' }],
				img:
					'https://cdn.sanity.io/images/2a4pwebi/production/54221078caf96a1b41dee83b6187ce0f88d8f48e-1098x901.png',
				link: 'https://app.delairebc.org',
				description: 'Connect, Grow, Serve and Go',
			},
			{
				title: [{ type: 'bold', text: 'Centinela Bible Church' }],
				img:
					'https://cdn.sanity.io/images/2a4pwebi/production/80b232ec48bdc93be76a88c7236b51de4024faed-370x282.webp',
				link: 'https://www.centinelabible.org',
				description: 'A Bible-centered church focused on faith and community.',
			},
			{
				title: [{ type: 'bold', text: 'The BRUG Method' }],
				img:
					'https://cdn.sanity.io/images/2a4pwebi/production/1291086c4f00f8686f820cb7e7ed465be2bfeb81-370x282.png',
				link: 'https://clientthebrugmethod.netlify.app',
				description: 'Body. Resistance. Ultimate. Gains!',
			},
		],
	},
	video: {
		id: 'OXUwrnE0Mdg',
		thumbnail:
			'https://cdn.sanity.io/images/2a4pwebi/production/0e760aaedca6cc487098dabb3f9271a0099e9b66-1920x1080.png',
		mt: true,
		mb: true,
	},
};

export default function Home() {
	return (
		<Layout>
			<Nav />
			<Banner {...landingPage.banner} />
			<FeaturedApps {...landingPage.featuredApps} />
			<Testimonial />
			<ContactUs mt />
			<Video {...landingPage.video} />
			<Footer />
		</Layout>
	);
}
