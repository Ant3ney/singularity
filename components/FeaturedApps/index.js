import React, { Component } from 'react';
import Link from 'next/link';
import './featured-apps.scss';

const FeaturedApps = ({ featureds, title }) => {
   return (
      <section className='featured-apps-container blog-one'>
         <div className='container'>
            <div className='block-title text-center'>
               <h2 className='block-title__title'>
                  <div
                     dangerouslySetInnerHTML={{
                        __html: title,
                     }}
                  ></div>
               </h2>
            </div>
            <div className='row'>
               {featureds ? (
                  featureds.map((featured, i) => {
                     return (
                        <div className='col-lg-4 col-md-6 col-sm-12 wow fadeInUp'>
                           <div className='blog-one__single'>
                              <div className='blog-one__image'>
                                 <img
                                    src={featured.img}
                                    alt='Site built by us'
                                 />
                                 <Link href={featured.link}>
                                    <a
                                       className='blog-one__more-link'
                                       target='_blank'
                                    >
                                       <i className='fa fa-link'></i>
                                    </a>
                                 </Link>
                              </div>
                              <div className='blog-one__content'>
                                 <h3 className='blog-one__title'>
                                    <Link href={featured.link}>
                                       <a
                                          dangerouslySetInnerHTML={{
                                             __html: featured.title,
                                          }}
                                          target='_blank'
                                       ></a>
                                    </Link>
                                 </h3>
                                 <p>{featured.description}</p>
                              </div>
                           </div>
                           {/* space-02.png */}
                        </div>
                     );
                  })
               ) : (
                  <></>
               )}
            </div>
         </div>
      </section>
   );
};
export default FeaturedApps;
