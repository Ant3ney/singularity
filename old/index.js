import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FeaturedApps from '../components/FeaturedApps';
import landingPageData from '../tempData/landingPage';
import Testimonial from '../components/Testimonial';

/* import Features from '../components/Features';
import Video from '../components/Video';
import CallToAction from '../components/CallToAction';
import CallToActionTwo from '../components/CallToActionTwo';
import Pricing from '../components/Pricing';
import Brands from '../components/Brands';
import Counter from '../components/Counter';
import Screenshots from '../components/Screenshots';
import Faq from '../components/Faq';
import NewsHome from '../components/NewsHome';
import Subscribe from '../components/Subscribe'; */

const HomePage = () => {
   let PageComponents = buildPage(landingPageData);
   return (
      <Layout pageTitle='Singularity'>
         {PageComponents}

         {/* <Features />
      <Video />
      <CallToAction />
      <CallToActionTwo />
      <Pricing />
      <Testimonial />
      <Brands />
      <Counter />
      <Screenshots />
      <Faq />
      <NewsHome />
      <Subscribe /> */}
         <Footer />
      </Layout>
   );
};

function buildPage(rawData) {
   let components = [];
   let formatedData = formatRawData(rawData);
   for (let i = 0; i < formatedData.length; i++) {
      let current = formatedData[i];

      switch (current.name) {
         case 'Nav':
            components.push(<Nav key={i} {...current.props} />);
            break;
         case 'Banner':
            components.push(<Banner key={i} {...current.props} />);
            break;
         case 'FeaturedApps':
            components.push(<FeaturedApps key={i} {...current.props} />);
            break;
         case 'Testimonial':
            components.push(<Testimonial key={i} {...current.props} />);
            break;
         default:
            break;
      }
   }

   return components;
}

function formatRawData(rawData) {
   /* When needed, add code that formats data */
   return rawData;
}

export default HomePage;
