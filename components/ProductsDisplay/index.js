import './style.scss';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoldsBreaksAndSpans from 'components/BoldsBreaksAndSpans';

export default function ProductsDisplay({ products, title }) {
   return (
      <section className='products-display-container'>
         <div className='container'>
            <h3 className='title block-title__title section-title'>
               <BoldsBreaksAndSpans BBS={title} />
            </h3>
            <div className='products-container'>
               {products ? (
                  products.map((product, i) => {
                     return (
                        <div className='product-container' key={i}>
                           <a
                              className='image-holder'
                              href={`/contactus?pluginmessage=${product.pluginMessage}`}
                           >
                              <img src={product.thumbnail} />
                           </a>
                           <a
                              className='product-title-container'
                              href={`/contactus?pluginmessage=${product.pluginMessage}`}
                           >
                              <h3 className='blog-one__title product-title'>
                                 {product.title}
                                 {/* <FontAwesomeIcon
                           className='local-icon'
                           icon={faInfoCircle}
                        /> */}
                              </h3>
                           </a>
                           <p className='product-description-text'>
                              {product.description}
                           </p>
                           <p className='product-price-text'>
                              Starts at: ${product.price}
                           </p>
                           <div className='action-button-container'>
                              <a
                                 className='banner-one__btn thm-btn acton-button'
                                 href={`/contactus?pluginmessage=${product.pluginMessage}`}
                              >
                                 <span>Order</span>
                              </a>
                           </div>
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
}
