import { useState, useEffect } from 'react';
import './style.scss';
import Box from './Box';
import Flat from './Flat';
import { useMediaQuery } from 'react-responsive';

export default function ComponentList({ pt, type, items, showPrice }) {
   let isMobile = useMediaQuery({ query: '(max-width: 576px)' });
   let isSmall = useMediaQuery({ query: '(max-width: 1199px)' });
   let [showAll, setShowAll] = useState(false);

   type = 'flat';
   pt = true;
   items = [
      {
         icon: '/assets/icons/Placeholders/shopping_cart_black_24dp.svg',
         title: 'Ecommerce',
         description:
            'Allow for the selling goods and services via payment solutions like Stripe and PayPal',
         price: 60,
      },
      {
         icon: '/assets/icons/Placeholders/1325054-200.png',
         title: 'Content Management System',
         description:
            'Edit the content of your site without having to edit its code.',
         price: 90,
      },
      {
         icon: '/assets/icons/Placeholders/person_outline_black_24dp.svg',
         title: 'User Authentication',
         description:
            'Allow users to sign up, make an account, and have an identity on your site',
         price: 120,
      },
      {
         icon: '/assets/icons/Placeholders/1325054-200.png',
         title: 'Content Management System',
         description:
            'Edit the content of your site without having to edit its code.',
         price: 40,
      },
      {
         icon: '/assets/icons/Placeholders/shopping_cart_black_24dp.svg',
         title: 'Ecommerce',
         description:
            'Allow for the selling goods and services via payment solutions like Stripe and PayPal',
         price: 90,
      },
      {
         icon: '/assets/icons/Placeholders/person_outline_black_24dp.svg',
         title: 'User Authentication',
         description:
            'Allow users to sign up, make an account, and have an identity on your site',
         price: 60,
      },
      {
         icon: '/assets/icons/Placeholders/shopping_cart_black_24dp.svg',
         title: 'Ecommerce',
         description:
            'Allow for the selling goods and services via payment solutions like Stripe and PayPal',
         price: 40,
      },
      {
         icon: '/assets/icons/Placeholders/1325054-200.png',
         title: 'Content Management System',
         description:
            'Edit the content of your site without having to edit its code.',
         price: 60,
      },
      {
         icon: '/assets/icons/Placeholders/person_outline_black_24dp.svg',
         title: 'User Authentication',
         description:
            'Allow users to sign up, make an account, and have an identity on your site',
         price: 120,
      },
      {
         icon: '/assets/icons/Placeholders/1325054-200.png',
         title: 'Content Management System',
         description:
            'Edit the content of your site without having to edit its code.',
         price: 190,
      },
      {
         icon: '/assets/icons/Placeholders/shopping_cart_black_24dp.svg',
         title: 'Ecommerce',
         description:
            'Allow for the selling goods and services via payment solutions like Stripe and PayPal',
         price: 60,
      },
      {
         icon: '/assets/icons/Placeholders/person_outline_black_24dp.svg',
         title: 'User Authentication',
         description:
            'Allow users to sign up, make an account, and have an identity on your site',
         price: 250,
      },
   ];

   //#region Decide weather or not see all button is displayed
   let [showShowAll, setShowShowAll] = useState(
      (isMobile && items.length > 3) || (!isMobile && items.length > 6)
   );
   useEffect(() => {
      setShowShowAll(
         (isMobile && items.length > 3) ||
            (type === 'box' && !isMobile && items.length > 6) ||
            (type === 'flat' && !isMobile && items.length > 4)
      );
   }, [isMobile, showShowAll]);
   //#endregion

   let contentProperties = {
      items: items,
      showAll: showAll,
      setShowAll: setShowAll,
      showPrice: true,
   };

   return (
      <section className={`component-list-container ${pt ? 'pt' : ''}`}>
         <div className='container component-list-inner-container'>
            <h3 className='title block-title__title section-title'>
               <span>What does it come with?</span>
            </h3>
            <p className='subtitle'>
               Upon purchasing this product, we will build you a site with the
               following features
            </p>
            {type === 'box' ? <Box {...contentProperties} /> : <></>}
            {type === 'flat' ? (
               isSmall ? (
                  <Box {...contentProperties} />
               ) : (
                  <Flat {...contentProperties} />
               )
            ) : (
               <></>
            )}
            {showShowAll ? (
               <button
                  className='banner-one__btn thm-btn m-auto see-more-button'
                  onClick={() => {
                     setShowAll(!showAll);
                  }}
               >
                  <span>{!showAll ? 'See More' : 'See Less'}</span>
               </button>
            ) : (
               <></>
            )}
         </div>
      </section>
   );
}
