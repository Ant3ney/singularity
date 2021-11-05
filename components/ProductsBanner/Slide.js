import './style.scss';
import { useMediaQuery } from 'react-responsive';
import BoldsBreaksAndSpans from 'components/BoldsBreaksAndSpans';

export default function Slide({
   title,
   description,
   displayImage,
   textFirst,
   className,
}) {
   let isMobile = useMediaQuery({ query: '(max-width: 907px)' });
   let CenterContent;
   if (!displayImage) {
      CenterContent = <TextSide width='full' />;
   } else {
      CenterContent = textFirst ? (
         <>
            <TextSide width='half' />
            <ImageSide />
         </>
      ) : (
         <>
            <ImageSide /> <TextSide width='half' />
         </>
      );
   }

   /* Main return */
   return <div className={`container ${className}`}>{CenterContent}</div>;

   function TextSide({ width }) {
      return (
         <div className={`side-container left ${width}`} key={1}>
            <div className='side-one'>
               <Title />
               <Subtitle />
            </div>
         </div>
      );
   }

   function ImageSide() {
      return (
         <div className='side-container right' key={2}>
            <div className='side-two-dif'>
               {isMobile ? <Title /> : <></>}
               <div className='image-holder'>
                  <img src={displayImage} />
               </div>
               {isMobile ? <Subtitle /> : <></>}
            </div>
         </div>
      );
   }

   function Title() {
      return title ? (
         <h3 className={`title block-title__title text`}>
            <BoldsBreaksAndSpans BBS={title} />
         </h3>
      ) : (
         <></>
      );
   }

   function Subtitle() {
      return description ? <p className='text'>{description}</p> : <></>;
   }
}
