import Banner from 'components/Banner';
import Testimonial from 'components/Testimonial';
import sectionSwitch from './sectionSwitch';
import FeaturedApps from 'components/FeaturedApps';
import ContactUs from 'components/ContactUs';
import SocialContacts from 'components/SocialContacts';
import ProductsBanner from 'components/ProductsBanner';
import ProductsDisplay from 'components/ProductsDisplay';
import Footer from 'components/Footer';
import ComponentList from 'components/ComponentList';
import PricingTable from 'components/PricingTable';
import SingleProductDisplay from 'components/ProductsDisplay/SingleProductDisplay';
import Video from 'components/Video';

export default function BuildComponents({ formatedBody, ...rest }) {
	console.log('building');
	let components = [];
	let newComponent;
	for (let i = 0; i < formatedBody.length; i++) {
		newComponent = null;
		let formatedSection = formatedBody[i];

		if (!formatedSection.type) console.error('Formatted product dose not have required type property');
		let BuildComponent = sectionSwitch(formatedSection.type, switchMeta);

		if (!BuildComponent.hasFailed) newComponent = BuildComponent(formatedSection, i);

		if (newComponent) components.push(newComponent);
		else console.error('failed build switch');
	}

	/* components.push(<PricingTable key={591} />);
   components.push(<ComponentList key={662} />); */
	components.push(<Footer key={632} />);

	return components;
}

let switchMeta /* This object must follow a strict structure */ = {
	for: 'build',
	buildLandingScreen: (fromatedSection, i) => {
		return <Banner key={i} {...fromatedSection.props} />;
	},
	buildProduct: (formatedSection, i) => {
		return (
			<div key={i}>
				<Banner {...formatedSection.landingScreen.props} />
				{formatedSection.pricingAndContent ? (
					formatedSection.pricingAndContent.map((PAC, j) => {
						switch (PAC.type) {
							case 'componentList':
								return <ComponentList key={j} {...PAC.props} />;
							case 'priceTable':
								return <PricingTable key={j} {...PAC.props} />;
							default:
								break;
						}
					})
				) : (
					<></>
				)}
				<ProductsBanner {...formatedSection.tecnicalDebtPolicy.props} />
				<SingleProductDisplay {...formatedSection.singleProductDisplay} />
			</div>
		);
	},
	buildTestimonials: (formatedSection, i) => {
		return <Testimonial key={i} />;
	},
	buildFeaturedApps: (formatedSection, i) => {
		return <FeaturedApps key={i} {...formatedSection.props} />;
	},
	buildContactUs: (formatedSection, i) => {
		return <ContactUs key={i} {...formatedSection.props} />;
	},
	buildSocialContacts: (formatedSection, i) => {
		return <SocialContacts key={i} {...formatedSection.props} />;
	},
	buildProductsBanner: (formatedSection, i) => {
		return <ProductsBanner key={i} {...formatedSection.props} />;
	},
	buildProductsDisplay: (formatedSection, i) => {
		return <ProductsDisplay key={i} {...formatedSection.props} />;
	},
	buildYoutubeDisplay: (formatedSection, i) => {
		return <Video key={i} {...formatedSection.props} />;
	},
};
