import './style.scss';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoldsBreaksAndSpans from 'components/BoldsBreaksAndSpans';
import Product from './Product';

export default function ProductsDisplay({ products, title, pt }) {
   return (
      <section className={`products-display-container ${pt ? 'pt' : ''}`}>
         <div className='container'>
            <h3 className='title block-title__title section-title'>
               <BoldsBreaksAndSpans BBS={title} />
            </h3>
            <div className='products-container'>
               {products ? (
                  products.map((product, i) => {
                     return <Product key={i} {...product} />;
                  })
               ) : (
                  <></>
               )}
            </div>
         </div>
      </section>
   );
}
