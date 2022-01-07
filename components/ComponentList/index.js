import { useState, useEffect } from 'react';
import './style.scss';
import Box from './Box';
import Flat from './Flat';
import { useMediaQuery } from 'react-responsive';
import mediaQuery from 'utilities/mediaQuery';

export default function ComponentList({
   title,
   subtitle,
   pt,
   type,
   items,
   showPrice,
}) {
   let [isMobile, setIsMobile] =
      useState(false); /* useMediaQuery({ query: '(max-width: 576px)' });  ||
      window.innerWidth <= 576 */
   let [isSmall, setIsSmall] =
      useState(false); /* useMediaQuery({ query: '(max-width: 1199px)' });  ||
      window.innerWidth <= 1199 */

   let [initSize, setInitSize] = useState(true);
   let [showAll, setShowAll] = useState(false);

   pt = true;

   useEffect(() => {
      if (!initSize) return;
      else setInitSize(false);

      setIsSmall(window.innerWidth <= 1000);
      setIsMobile(window.innerWidth <= 576);

      window.addEventListener('resize', windowResized);
      function windowResized() {
         setIsSmall(window.innerWidth <= 1000);
         setIsMobile(window.innerWidth <= 576);
      }
      return () => {};
   }, [isMobile, isSmall]);

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
      showPrice: showPrice,
   };

   return (
      <section className={`component-list-container ${pt ? 'pt' : ''}`}>
         <div className='container component-list-inner-container'>
            <h3 className='title block-title__title section-title'>
               <span>{title}</span>
            </h3>
            <p className='subtitle'>{subtitle}</p>
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
