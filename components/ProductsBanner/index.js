import './style.scss';
import { useMediaQuery } from 'react-responsive';
import BoldsBreaksAndSpans from 'components/BoldsBreaksAndSpans';
import Slide from './slide';

export default function ProductsBanner({ title, description, slides }) {
   let isMobile = useMediaQuery({ query: '(max-width: 707px)' });

   console.log(slides);

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
