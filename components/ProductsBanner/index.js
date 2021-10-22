import './style.scss';
import { useMediaQuery } from 'react-responsive';
import BoldsBreaksAndSpans from 'components/BoldsBreaksAndSpans';

export default function ProductsBanner({ title, description }) {
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
            <BoldsBreaksAndSpans BBS={title} />
         </h3>
      );
   }

   function Subtitle() {
      return description ? <p className='text'>{description}</p> : <></>;
   }
}
