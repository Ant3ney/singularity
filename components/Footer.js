import React, { Component } from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Blog extends Component {
   constructor() {
      super();
      this.state = {
         scrollBtn: false,
      };
      this.handleScroll = this.handleScroll.bind(this);
      this.scrollTop = this.scrollTop.bind(this);
   }

   componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
   }

   handleScroll() {
      if (window.scrollY > 70) {
         this.setState({
            scrollBtn: true,
         });
      } else if (window.scrollY < 70) {
         this.setState({
            scrollBtn: false,
         });
      }
   }

   scrollTop = () => {
      window.scrollTo(0, 0);
   };

   render() {
      return (
         <div>
            <footer className='site-footer'>
               <div className='site-footer__upper'>
                  <div className='container'>
                     <div className='row'>
                        <div className='col-lg-3'>
                           <div className='footer-widget footer-widget__about'>
                              <img
                                 src='/assets/images/resources/logo-dark.png'
                                 width='119'
                                 alt=''
                                 className='footer-widget__logo'
                              />
                              <p className='footer-widget__contact'>
                                 <a href='tel:424-201-9017'>(424) 201-9017</a>
                              </p>

                              <p className='footer-widget__contact'>
                                 <a href='mailto:anthonycavuoti@gmail.com'>
                                    anthonycavuoti@gmail.com
                                 </a>
                              </p>
                              <p className='footer-widget__contact'>
                                 3528 Emerald St <br /> California 90503
                              </p>
                           </div>
                        </div>
                        <div className='col-lg-3'>
                           <div className='footer-widget'>
                              <div className='site-footer__social'>
                                 <a
                                    href='https://www.facebook.com/singularitydevelopment'
                                    className='fa fa-facebook-square'
                                 ></a>
                                 <a
                                    href='https://www.instagram.com/singularity_development/'
                                    className='fa fa-instagram'
                                 ></a>
                                 <a
                                    href='https://www.linkedin.com/groups/14010152/'
                                    className='fab fa-linkedin-in'
                                 >
                                    <FontAwesomeIcon
                                       className='local-icon'
                                       icon={faLinkedinIn}
                                    />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='site-footer__bottom'>
                  <div className='container'>
                     <div className='inner-container text-center'>
                        <p className='site-footer__copy'>
                           &copy; copyright 2021 by <a href='/'>Singularity</a>
                        </p>
                     </div>
                  </div>
               </div>
            </footer>

            <div
               onClick={this.scrollTop}
               className='scroll-to-target scroll-to-top'
               style={{ display: this.state.scrollBtn ? 'block' : 'none' }}
            >
               <i className='fa fa-angle-up'></i>
            </div>
         </div>
      );
   }
}
