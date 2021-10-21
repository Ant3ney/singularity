import './style.scss';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductsDisplay() {
   return (
      <section className='products-display-container'>
         <div className='container'>
            <h3 className='title block-title__title section-title'>
               Products Section
            </h3>
            <div className='products-container'>
               <div className='product-container'>
                  <a
                     className='image-holder'
                     href="/contactus?pluginmessage=Hello, I took a look at your products page and I'm interested in having you build me a Dabbler Site. I'm available to call during the following times."
                  >
                     <img src='/assets/images/placeholders/dabbler-site.png' />
                  </a>
                  <a
                     className='product-title-container'
                     href="/contactus?pluginmessage=Hello, I took a look at your products page and I'm interested in having you build me a Dabbler Site. I'm available to call during the following times."
                  >
                     <h3 className='blog-one__title product-title'>
                        Singularity Dabbler Site
                        {/* <FontAwesomeIcon
                           className='local-icon'
                           icon={faInfoCircle}
                        /> */}
                     </h3>
                  </a>
                  <p className='product-description-text'>
                     Perfect for those who what the best quality for the
                     cheapest price.
                  </p>
                  <p className='product-price-text'>Starts at: $60</p>
                  <div className='action-button-container'>
                     <a
                        className='banner-one__btn thm-btn acton-button'
                        href="/contactus?pluginmessage=Hello, I took a look at your products page and I'm interested in having you build me a Dabbler Site. I'm available to call during the following times."
                     >
                        <span>Order</span>
                     </a>
                  </div>
               </div>
               <div className='product-container'>
                  <a
                     className='image-holder'
                     href="/contactus?pluginmessage=Hello, I took a look at your products page and I'm interested in having you build me a Functional Site. I'm available to call during the following times."
                  >
                     <img src='/assets/images/placeholders/funtional-site.png' />
                  </a>
                  <a
                     className='product-title-container'
                     href="/contactus?pluginmessage=Hello, I took a look at your products page and I'm interested in having you build me a Functional Site. I'm available to call during the following times."
                  >
                     <h3 className='blog-one__title product-title'>
                        Singularity Functional Site
                        {/* <FontAwesomeIcon
                           className='local-icon'
                           icon={faInfoCircle}
                        /> */}
                     </h3>
                  </a>
                  <p className='product-description-text'>
                     Perfect for those who know what they wan't and arn't
                     looking for all the bells and whistles.
                  </p>
                  <p className='product-price-text'>Starts at: $300</p>
                  <div className='action-button-container'>
                     <a
                        className='banner-one__btn thm-btn acton-button'
                        href="/contactus?pluginmessage=Hello, I took a look at your products page and I'm interested in having you build me a Functional Site. I'm available to call during the following times."
                     >
                        <span>Order</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
