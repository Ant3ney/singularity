import sectionSwitch from './sectionSwitch';
import getProductsData from 'API/getProductsData';

export default async function formatData(rawBodyData) {
   return new Promise(async (resolve, reject) => {
      if (rawBodyData.hasFailed) {
         resolve({ hasFailed: true });
         return;
      }
      let rawB = rawBodyData[0];
      let formatedBody = [];

      let newSection;
      for (let i = 0; i < rawB.sections.length; i++) {
         newSection = null;
         let rawS = rawB.sections[i];
         newSection = await formatSection(rawS);
         if (newSection && !newSection.hasFailed) formatedBody.push(newSection);
      }

      resolve({
         rawBodyData: rawBodyData,
         formatedBody: formatedBody,
         hasFailed: false,
         bodyComponents: null,
      });
   });
}

async function formatSection(rawS) {
   let formatSectionFunction = sectionSwitch(rawS._type, switchMeta);
   if (formatSectionFunction.hasFailed) return formatSectionFunction;
   let section = await formatSectionFunction(rawS);
   return section;
}

let switchMeta /* This object must follow a strict structure */ = {
   for: 'format',
   formatLandingScreen: rawS => {
      let formatedTitle = formatBoldsBreaksAndSpans(rawS.title);
      return {
         type: rawS._type,
         props: {
            title: formatedTitle,
         },
      };
   },
   formatTestimonials: rawS => {
      let formatedTitle = formatBoldsBreaksAndSpans(rawS.title);
      return {
         type: rawS._type,
         props: {
            title: formatedTitle,
         },
      };
   },
   formatContactUs: rawS => {
      return {
         type: rawS._type,
         props: {
            mt: rawS.mt ? rawS.mt : false,
         },
      };
   },
   formatFeaturedApps: rawS => {
      let formatedTitle = formatBoldsBreaksAndSpans(rawS.title);
      let featureds = [];
      let newFeatured;
      rawS.featureds.forEach((rawF, i) => {
         newFeatured = null;
         newFeatured = formatFeaturedApp(rawF);
         if (newFeatured) featureds.push(newFeatured);
      });

      return {
         type: rawS._type,
         props: {
            title: formatedTitle,
            featureds: featureds,
         },
      };
   },
   formatSocialContacts: rawS => {
      let formatedTitle = formatBoldsBreaksAndSpans(rawS.title);
      return {
         type: rawS._type,
         props: {
            title: formatedTitle,
            mt: true,
         },
      };
   },
   formatProductsBanner: rawS => {
      let slides = [];
      let newSlide;

      for (let i = 0; i < rawS.slides.length; i++) {
         newSlide = null;

         newSlide = formatProductsBannerSlide(rawS.slides[i]);

         if (newSlide) slides.push(newSlide);
      }

      return {
         type: rawS._type,
         props: {
            slides: slides,
         },
      };
   },
   formatProductsDisplay: async rawS => {
      let formatedTitle = formatBoldsBreaksAndSpans(rawS.title);
      let formatedProducts = [];
      let rawProducts = await getProductsData();
      if (rawProducts.hasFailed) {
         return rawProducts;
      }
      let newProduct;

      if (rawProducts) {
         for (let i = 0; i < rawProducts.length; i++) {
            newProduct = null;

            newProduct = formatRawProductDisplay(rawProducts[i]);

            if (newProduct) formatedProducts.push(newProduct);
         }

         formatedProducts = sortArray(formatedProducts);
      }

      return {
         type: rawS._type,
         props: {
            title: formatedTitle,
            pt: rawS.pt,
            products: formatedProducts,
         },
      };
   },
};

function formatProductsBannerSlide(rawS) {
   console.log(rawS);
   let formatedTitle = formatBoldsBreaksAndSpans(rawS.title);
   let displayImage = getImgUrlFromFileName(rawS.displayImage.asset._ref);
   return {
      title: formatedTitle,
      description: rawS.description,
      displayImage: displayImage,
      tf: rawS.tf,
   };
}

function sortArray(a) {
   let N = a.length;

   var i = 0,
      j = 0,
      v = 0;

   for (i = 1; i < N; i++) {
      v = a[i].priority;
      j = i;
      while (j > 0 && a[j - 1].priority < v) {
         let buffer = a[j];
         a[j] = a[j - 1];
         a[j - 1] = buffer;
         j--;
      }
      a[j].priority = v;
   }
   return a;
}

function formatRawProductDisplay(rawP) {
   if (!rawP) return null;
   let thumbnail = getImgUrlFromFileName(rawP.thumbnail.asset._ref);

   return {
      title: rawP.title,
      thumbnail: thumbnail,
      priority: rawP.priority,
      description: rawP.shortDescription,
      price: rawP.price,
      pluginMessage: rawP.pluginMessage,
   };
}

function formatFeaturedApp(rawF) {
   /* Singular */
   let imageFileName = rawF.image.asset._ref;
   let title = formatBoldsBreaksAndSpans(rawF.title);
   let imageSrc = getImgUrlFromFileName(imageFileName);

   return {
      title: title,
      img: imageSrc,
      link: rawF.link,
      description: rawF.description,
   };
}

function formatBoldsBreaksAndSpans(rawA) /* raw array */ {
   let formatedBBS /* formated bolds breaks spans */ = [];
   let displayImage = getImgUrlFromFileName;

   rawA.forEach((field, i) => {
      formatedBBS.push({
         type: field._type,
         text: field._type === 'break' ? true : field.title,
      });
   });

   return formatedBBS;
}

function getImgUrlFromFileName(fileName) {
   fileName = formatFileName(fileName);
   let url = `https://cdn.sanity.io/images/2a4pwebi/production/${fileName}`;
   return url;
}

function formatFileName(fileName) {
   let formatFileSlugs = ['png', 'jpg'];

   formatFileSlugs.forEach(SLUG => {
      if (fileName.indexOf(`-${SLUG}`) >= 0) {
         fileName = fileName.replace(`-${SLUG}`, `.${SLUG}`);
      }
   });

   if (fileName.indexOf('image-') >= 0) {
      fileName = fileName.replace('image-', '');
   }

   return fileName;
}
