// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import page from './page.js';
import boldsBreaksAndSpans from './fields/boldsBreaksAndSpans/index.js';
import LandingScreenSection from './LandingScreenSection/index.js';
import FeaturedAppsSection from './FeaturedAppsSection/index.js';
import TestimonialsSection from './TestimonialsSection/index.js';
import ContactUsSection from './ContactUsSection/index.js';
import SocialContactsSection from './SocialContactsSection/index.js';
import ProductsSection from './ProductsSection/index.js';
import ProductBannerSection from './ProductsSection/Banner';
import Product from './Product';
import ComponentList from './Product/ComponentList.js';
import PriceTable from './PriceTable/index.js';
import GeneralInfo from './Product/GeneralInfo.js';
import YoutubeDisplay from './YoutubeDisplay/index.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
   // We name our schema
   name: 'default',
   // Then proceed to concatenate our document type
   // to the ones provided by any plugins that are installed
   types: schemaTypes.concat([
      /* Import feild schemas first */
      boldsBreaksAndSpans,

      LandingScreenSection,
      FeaturedAppsSection,
      ContactUsSection,
      TestimonialsSection,
      SocialContactsSection,
      ProductsSection,
      ProductBannerSection,
      ComponentList,
      PriceTable,
      GeneralInfo,
      Product,
      YoutubeDisplay,

      page,
   ]),
});
