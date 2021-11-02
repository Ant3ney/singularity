import { useMediaQuery } from 'react-responsive';

export default function Flat({ items, showPrice, showAll }) {
   let isMobile = useMediaQuery({ query: '(max-width: 576px)' });
   return (
      <div className='flat-container'>
         {items ? (
            items.map((item, i) => {
               if (i > 3 && !showAll) {
                  return <></>;
               }

               return (
                  <div className='flat-item-container'>
                     <img className='item-icon' src={item.icon} />
                     <p className='item-title'>
                        <strong>{item.title}</strong>
                     </p>
                     {showPrice ? (
                        <p className='item-price'>
                           <strong>${item.price}</strong>
                        </p>
                     ) : (
                        <></>
                     )}
                     <p className='item-description'>{item.description}</p>
                  </div>
               );
            })
         ) : (
            <></>
         )}
      </div>
   );
}
