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

      let displayImage = getImageFromRaw(rawS, 'displayImage');

      return {
         type: rawS._type,
         props: {
            title: formatedTitle,
            displayImage: displayImage ? displayImage : null,
         },
      };
   },
   formatYoutubeDisplay: rawS => {
      let thumbnail = getImageFromRaw(rawS, 'thumbnail');

      return {
         type: rawS._type,
         props: {
            id: rawS.id,
            thumbnail: thumbnail,
            mt: rawS.mt,
            mb: rawS.mb,
         },
      };
   },
   formatProduct: rawP => {
      let formatedSection = {
         type: rawP._type,
         landingScreen: switchMeta.formatLandingScreen(
            rawP.landingProductBanner
         ),
         pricingAndContent: formatPricingAndContent(rawP.pricingAndContent),
         tecnicalDebtPolicy: switchMeta.formatProductsBanner(
            rawP.tecnicalDebtPolicy
         ),
         singleProductDisplay: { ...formatRawProductDisplay(rawP), pt: false },
      };

      return {
         type: formatedSection.type,
         landingScreen: formatedSection.landingScreen,
         pricingAndContent: formatedSection.pricingAndContent,
         tecnicalDebtPolicy: formatedSection.tecnicalDebtPolicy,
         singleProductDisplay: formatedSection.singleProductDisplay,
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
         type: rawS._type ? rawS._type : null,
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

function formatComponentList(rawS) {
   let items = [];
   let newItem;
   for (let i = 0; i < rawS.components.length; i++) {
      let currentComponent = rawS.components[i];

      newItem = null;

      newItem = {
         title: currentComponent.title ? currentComponent.title : null,
         description: currentComponent.description
            ? currentComponent.description
            : null,
         icon: currentComponent.icon
            ? getImageFromRaw(currentComponent, 'icon')
            : null,
         price: currentComponent.price ? currentComponent.price : null,
      };

      if (newItem) items.push(newItem);
   }

   return {
      type: 'componentList',
      props: {
         title: rawS.title ? rawS.title : null,
         subtitle: rawS.subtitle ? rawS.subtitle : null,
         showPrice: rawS.showPrice
            ? rawS.showPrice
            : (() => {
                 return null;
              })(),
         pt: true,
         items: items,
         type: rawS.type,
      },
   };
}

function formatPriceTabel(rawS) {
   if (!rawS || !rawS.choices) {
      console.error(
         'Given Raw section or rawS.choices camback as null or undefined'
      );
      return {};
   }

   let choices = [];
   let newChoice;
   let currentChoice;

   for (let i = 0; i < rawS.choices.length; i++) {
      currentChoice = rawS.choices[i];
      newChoice = null;

      newChoice = {
         price: currentChoice.price,
         name: currentChoice.name,
         button: currentChoice.href
            ? {
                 title: currentChoice.actionTitle
                    ? currentChoice.actionTitle
                    : 'Start',
                 href: currentChoice.href,
              }
            : null,
         tagline: currentChoice.tagline ? currentChoice.tagline : null,
         features: currentChoice.features.features,
      };

      if (newChoice) choices.push(newChoice);
   }

   let formatedTitle = rawS ? formatBoldsBreaksAndSpans(rawS.title) : null;

   return {
      type: rawS._type,
      props: {
         title: formatedTitle ? formatedTitle : null,
         subtitle: rawS ? rawS.subtitle : null,
         choices: choices,
      },
   };
}

function formatProductsBannerSlide(rawS) {
   let formatedTitle = rawS.title
      ? formatBoldsBreaksAndSpans(rawS.title)
      : null;

   let displayImage = rawS.displayImage
      ? getImgUrlFromFileName(rawS.displayImage.asset._ref)
      : null;
   return {
      title: formatedTitle,
      description: rawS.description ? rawS.description : null,
      displayImage: displayImage,
      tf: rawS.tf ? rawS.tf : null,
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
   if (!rawP.generalInfo) return null;
   rawP = rawP.generalInfo;
   let thumbnail = rawP.thumbnail
      ? getImgUrlFromFileName(rawP.thumbnail.asset._ref)
      : null;

   return {
      title: rawP.title,
      thumbnail: thumbnail,
      priority: rawP.priority,
      description: rawP.shortDescription,
      price: rawP.price,
      pluginMessage: rawP.pluginMessage,
      slug: rawP.slug ? rawP.slug.current : null || null,
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
   let formatFileSlugs = ['png', 'jpg', 'svg', 'webp'];

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

function getImageFromRaw(raw, imageFeildName) {
   imageFeildName = imageFeildName || 'thumbnail';
   let image = getImgUrlFromFileName(raw[imageFeildName].asset._ref);
   return image;
}

function formatPricingAndContent(PAC) /* pricing and content */ {
   let PACArray = [];
   let newPAC;

   for (let i = 0; i < PAC.length; i++) {
      newPAC = null;

      switch (PAC[i]._type) {
         case 'componentList':
            newPAC = formatComponentList(PAC[i]);
            break;
         case 'priceTable':
            newPAC = formatPriceTabel(PAC[i]);
            break;
         default:
            break;
      }

      if (newPAC) PACArray.push(newPAC);
   }

   return PACArray;
}
