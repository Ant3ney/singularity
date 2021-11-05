import './style.scss';
import Slide from './Slide';

export default function ProductsBanner({ slides }) {
   return (
      <section className='products-banner-container'>
         {slides.map((slide, i) => {
            return (
               <Slide
                  key={i}
                  title={slide.title}
                  description={slide.description}
                  displayImage={slide.displayImage}
                  textFirst={slide.tf}
                  className={i !== 0 ? 'pt-25' : ''}
               />
            );
         })}
      </section>
   );
}
