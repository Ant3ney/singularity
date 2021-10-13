import Banner from 'components/Banner';
import Testimonial from 'components/Testimonial';
import sectionSwitch from './sectionSwitch';
import FeaturedApps from 'components/FeaturedApps';
import ContactUs from 'components/ContactUs';

export default function BuildComponents({ formatedBody, ...rest }) {
   let components = [];
   let newComponent;
   for (let i = 0; i < formatedBody.length; i++) {
      newComponent = null;
      let formatedSection = formatedBody[i];

      newComponent = sectionSwitch(formatedSection.type, switchMeta)(
         formatedSection,
         i
      );

      if (newComponent) components.push(newComponent);
   }

   return components;
}

let switchMeta /* This object must follow a strict structure */ = {
   for: 'build',
   buildLandingScreen: (fromatedSection, i) => {
      return <Banner key={i} />;
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
};
