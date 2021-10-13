import React, { Component } from 'react';
import Link from 'next/link';
import Nav from 'components/Nav';
import Layout from '../components/Layout';
import getBodyData from '../API/getBodyData';
import formatBodyData from './body/formatData';
import BuildComponents from './body/buildComponents';

export default function Dynamic(props) {
   let { body } = props;
   let JSX;
   if (body && !body.hasFailed) {
      console.log(body.rawBodyData);
      JSX = BuildComponents(body);
      console.log(JSX);
   }

   if (!body || body.hasFailed) {
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
   return { paths: ['/[id]'], fallback: true };
}

export async function getStaticProps({ params }) {
   /* Be warned. This function is prone to some nasty bugs! */
   let routeName = params && params.id ? params.id : '/';
   if (routeName !== '/') {
      routeName = `/${routeName}`;
   }

   let body = await getBodyData(routeName)
      .then(formatBodyData)
      .catch(handleRejections);

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
