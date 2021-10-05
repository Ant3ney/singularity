import React from 'react';

const Banner = () => {
   return (
      <section className='banner-one' id='banner'>
         <span className='banner-one__shape-1'></span>
         <span className='banner-one__shape-2'></span>
         <span className='banner-one__shape-3'></span>
         <span className='banner-one__shape-4'></span>
         <div className='container'>
            <div className='banner-one__moc'>
               <img
                  src='/assets/images/mocs/banner-moc-1-1.png'
                  alt='Awesome Image'
               />
            </div>
            <div className='row'>
               <div className='col-xl-6 col-lg-8'>
                  <div className='banner-one__content'>
                     <h3 className='banner-one__title'>
                        We Make Building your
                        <span> Website </span>
                        Fun and Easy
                     </h3>
                     <p className='banner-one__text'>
                        Do you need a website with guaranteed great quality?{' '}
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
};
export default Banner;
