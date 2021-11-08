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

export default function BuildComponents({ formatedBody, ...rest }) {
   let components = [];
   let newComponent;
   for (let i = 0; i < formatedBody.length; i++) {
      newComponent = null;
      let formatedSection = formatedBody[i];

      let BuildComponent = sectionSwitch(formatedSection.type, switchMeta);

      if (!BuildComponent.hasFailed)
         newComponent = BuildComponent(formatedSection, i);

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
   buildNewProductSchema: (formatedSection, i) => {
      return (
         <div key={i}>
            <Banner {...formatedSection.landingScreen.props} />
            <ComponentList {...formatedSection.comesWithSection.props} />
            <PricingTable
               {...formatedSection.developmentRevisionsPricing.props}
            />
            <ComponentList {...formatedSection.developmentComponents.props} />
            <PricingTable {...formatedSection.designRevisionsPricing.props} />
            <ComponentList {...formatedSection.designComponents.props} />
            <PricingTable {...formatedSection.sectionsPricing.props} />
            <PricingTable {...formatedSection.FeaturesPricing.props} />
            <ProductsBanner {...formatedSection.tecnicalDebtPolicy.props} />
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
};
