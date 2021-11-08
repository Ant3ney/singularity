import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Product({
   pluginMessage,
   thumbnail,
   title,
   description,
   price,
   className,
   slug,
}) {
   console.log(slug);
   return (
      <div className={`product-container ${className}`}>
         <a className='image-holder' href={`/products/${slug}`}>
            <img src={thumbnail} />
         </a>
         <a className='product-title-container' href={`/products/${slug}`}>
            <h3 className='blog-one__title product-title'>
               {title}

               <FontAwesomeIcon className='local-icon' icon={faInfoCircle} />
            </h3>
         </a>
         <p className='product-description-text'>{description}</p>
         <p className='product-price-text'>Starts at: ${price}</p>
         <div className='action-button-container'>
            <a
               className='banner-one__btn thm-btn acton-button'
               href={`/contactus?pluginmessage=${pluginMessage}`}
            >
               <span>Order</span>
            </a>
         </div>
      </div>
   );
}
