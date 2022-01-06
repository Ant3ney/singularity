import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './style.scss';
import BoldsBreaksAndSpans from 'components/BoldsBreaksAndSpans';

const Banner = ({
   title,
   displayImage = '/assets/images/mocs/banner-moc-1-1.png',
}) => {
   let isMobile = useMediaQuery({ query: '(max-width: 480px)' });

   return (
      <section className='banner-one-container banner-one' id='banner'>
         <span className='banner-one__shape-1'></span>
         <span className='banner-one__shape-2'></span>
         <span className='banner-one__shape-3'></span>
         <span className='banner-one__shape-4'></span>
         <div className='container'>
            <div className='banner-one__moc'>
               {isMobile ? <Title /> : <></>}
               <img src={displayImage} alt='Awesome Image' />
            </div>
            <div className='row'>
               <div className='col-xl-6 col-lg-7'>
                  <div className='banner-one__content'>
                     {!isMobile ? <Title /> : <></>}
                     <p className='banner-one__text'>
                        <span>
                           Do you need a website with guaranteed great quality?{' '}
                        </span>
                        <br /> Are there specific requirements you need in your
                        site?
                     </p>
                     <a href='/contactus' className='banner-one__btn thm-btn '>
                        <span>Lets Talk</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );

   function Title() {
      return title ? (
         <h3 className='title banner-one__title'>
            <BoldsBreaksAndSpans BBS={title} />
         </h3>
      ) : (
         <></>
      );
   }
};

export default Banner;
