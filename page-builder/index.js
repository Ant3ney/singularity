import React from 'react';
import Nav from 'components/Nav';
import Layout from '../components/Layout';
import getBodyData from '../API/getBodyData';
import formatBodyData from './body/formatData';
import BuildComponents from './body/BuildComponents';
import { getAllPageIds } from 'lib/page';

export default function Dynamic(props) {
   let { body } = props;
   let JSX;
   if (body && !body.hasFailed) {
      JSX = BuildComponents(body);
   }

   if (!body) {
      return (
         <Layout>
            <div>Loading page...</div>
         </Layout>
      );
   } else if (body.hasFailed) {
      return (
         <Layout>
            <div>Failed to load body</div>
         </Layout>
      );
   }
   return (
      <Layout>
         <Nav />
         <>{JSX}</>
      </Layout>
   );
}

export async function getStaticPaths(props) {
   const paths = getAllPageIds();
   return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
   /* Be warned. This function is prone to some nasty bugs! */
   let routeName = formatRoutName(params);

   let body = await getBodyData(routeName)
      .then(formatBodyData)
      .catch(handleRejections);

   console.log(await getBodyData(routeName));

   let props = {
      props: {
         body: body,
      },
   };
   return props;
}

function handleRejections(results) {
   return new Promise(resolve => {
      resolve(results);
   });
}

function formatRoutName(params) {
   let routeName = params && params.id ? params.id : '/';

   if (routeName !== '/') {
      routeName = `/${routeName}`;
   }
   if (routeName.indexOf(',') >= 0) {
      routeName = routeName.replace(',', '/');
   }

   return routeName;
}
