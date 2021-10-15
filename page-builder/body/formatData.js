import sectionSwitch from './sectionSwitch';
export default function formatData(rawBodyData) {
   return new Promise((resolve, reject) => {
      if (rawBodyData.hasFailed) {
         resolve({ hasFailed: true });
      }
      let rawB = rawBodyData[0];
      let formatedBody = [];

      let newSection;
      for (let i = 0; i < rawB.sections.length; i++) {
         newSection = null;
         let rawS = rawB.sections[i];
         newSection = formatSection(rawS);
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

function formatSection(rawS) {
   let formatSectionFunction = sectionSwitch(rawS._type, switchMeta);
   if (formatSectionFunction.hasFailed) return formatSectionFunction;
   let section = formatSectionFunction(rawS);
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
};

function formatFeaturedApp(rawF) {
   /* Singular */
   let imageFileName = rawF.image.asset._ref;
   let title = formatBoldsBreaksAndSpans(rawF.title);
   let imageSrc = getImgUrlFromFileName(imageFileName);
   console.log(imageSrc);

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
