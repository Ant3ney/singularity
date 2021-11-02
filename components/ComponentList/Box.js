import './style.scss';
import { useMediaQuery } from 'react-responsive';

export default function BoxList({ items, showAll, showPrice }) {
   let isMobile = useMediaQuery({ query: '(max-width: 576px)' });
   return (
      <div className='box-container'>
         {items ? (
            items.map((item, i) => {
               if (i > (isMobile ? 2 : 5) && !showAll) {
                  return <></>;
               }
               return (
                  <div className={`box-outer-item-container`} key={i}>
                     <img className='item-icon' src={item.icon} />
                     <p className='item-title'>
                        <strong>{item.title}</strong>
                     </p>
                     <p className='item-description'>{item.description}</p>
                     {showPrice ? (
                        <p className='item-price'>
                           <strong>${item.price}</strong>
                        </p>
                     ) : (
                        <></>
                     )}
                  </div>
               );
            })
         ) : (
            <></>
         )}
      </div>
   );
}
