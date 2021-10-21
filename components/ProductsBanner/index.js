import './style.scss';
import { useMediaQuery } from 'react-responsive';

export default function ProductsBanner() {
   let isMobile = useMediaQuery({ query: '(max-width: 707px)' });

   return (
      <section className='products-banner-container'>
         <div className='container'>
            <div className='side-container left' key={1}>
               <div className='side-one'>
                  <Title />
                  <Subtitle />
               </div>
            </div>
            <div className='side-container right' key={2}>
               <div className='side-two-dif'>
                  {isMobile ? <Title /> : <></>}
                  <div className='image-holder'>
                     <img src='/assets/images/placeholders/featured-product.png' />
                  </div>
                  {isMobile ? <Subtitle /> : <></>}
               </div>
            </div>
         </div>
      </section>
   );

   function Title() {
      return (
         <h3 className='title block-title__title text'>
            <span>Prepared Plans to suite your unique needs at the</span>{' '}
            <strong>best price</strong>
         </h3>
      );
   }

   function Subtitle() {
      return (
         <p className='text'>
            We had lost something when we buy online. Singularity aims to bring
            that back through selling products online as if you where visiting a
            brick and morter shop
         </p>
      );
   }
}
