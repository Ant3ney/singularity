import './style.scss';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MakeDeal({ mt }) {
   return (
      <section
         className={`social-contacts service-one ${mt ? 'mt-20' : ''}`}
         id='features'
      >
         <div className='container'>
            <div className='block-title text-center'>
               <h2 className='block-title__title'>
                  Other Supported Ways <br />
                  You May <span>Contact</span> Us
               </h2>
            </div>
            <div className='row'>
               <div
                  className='col-lg-3 col-md-6 col-sm-12 wow fadeInUp'
                  data-wow-duration='1500ms'
               >
                  <div className='service-one__single text-center'>
                     <div className='service-one__inner'>
                        <i className='service-one__icon'>
                           <FontAwesomeIcon
                              className='local-icon'
                              icon={faLinkedinIn}
                           />
                        </i>
                        <h3>
                           <a href='#'>Linkedin</a>
                        </h3>
                        <p>
                           Lorem ipsum is are <br /> many variations of <br />{' '}
                           pass of majority.
                        </p>
                        <a href='#' className='service-one__link'>
                           <i className='dimon-icon-right-arrow'></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  className='col-lg-3 col-md-6 col-sm-12 wow fadeInDown'
                  data-wow-duration='1500ms'
               >
                  <div className='service-one__single text-center'>
                     <div className='service-one__inner'>
                        <i className='service-one__icon dimon-icon-presentation'></i>
                        <h3>
                           <a href='#'>
                              Marketing <br /> Analysis
                           </a>
                        </h3>
                        <p>
                           Lorem ipsum is are <br /> many variations of <br />{' '}
                           pass of majority.
                        </p>
                        <a href='#' className='service-one__link'>
                           <i className='dimon-icon-right-arrow'></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  className='col-lg-3 col-md-6 col-sm-12 wow fadeInUp'
                  data-wow-duration='1500ms'
               >
                  <div className='service-one__single text-center'>
                     <div className='service-one__inner'>
                        <i className='service-one__icon dimon-icon-target'></i>
                        <h3>
                           <a href='#'>
                              SEO and <br /> Backlinks
                           </a>
                        </h3>
                        <p>
                           Lorem ipsum is are <br /> many variations of <br />{' '}
                           pass of majority.
                        </p>
                        <a href='#' className='service-one__link'>
                           <i className='dimon-icon-right-arrow'></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  className='col-lg-3 col-md-6 col-sm-12 wow fadeInDown'
                  data-wow-duration='1500ms'
               >
                  <div className='service-one__single text-center'>
                     <div className='service-one__inner'>
                        <i className='service-one__icon dimon-icon-visualization'></i>
                        <h3>
                           <a href='#'>
                              Content <br /> Marketing
                           </a>
                        </h3>
                        <p>
                           Lorem ipsum is are <br /> many variations of <br />{' '}
                           pass of majority.
                        </p>
                        <a href='#' className='service-one__link'>
                           <i className='dimon-icon-right-arrow'></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
