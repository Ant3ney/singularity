'use client';

import Product from './Product';

export default function SingleProductDisplay({ pt, ...rest }: Record<string, any>) {
   return (
      <section
         className={`products-display-container single ${pt ? 'pt' : ''}`}
      >
         <div className='container'>
            <Product {...rest} />
         </div>
      </section>
   );
}
