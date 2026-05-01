import React from "react";
import { useMediaQuery } from "react-responsive";
import BoldsBreaksAndSpans from "components/BoldsBreaksAndSpans";
import renderBoxArt from './renderBoxArt'; 
import Brands from '../Brands';
import Features from '../Features';
import CallToAction from '../CallToAction';
import CallToActionTwo from '../CallToActionTwo';


//pu
//TODO: Update sanity and builder APIs and let it know that the cover art is static now
const Banner = ({
	title,
	subtitle,
}) => {
	const bannerMocRef = React.useRef(null);
	const heroRef = React.useRef(null);
	const cleanupBoxArtRef = React.useRef(null);
	let isMobile = useMediaQuery({ query: "(max-width: 480px)" });

	React.useEffect(() => {
		const bannerMoc = bannerMocRef.current;
		const hero = heroRef.current;

		if(isMobile) {
			bannerMoc?.classList.add('mobile_var_of_ball_ref_ele');
			hero?.classList.remove('desctop_style_card_art');
		} else {
			bannerMoc?.classList.remove('mobile_var_of_ball_ref_ele');
			hero?.classList.add('desctop_style_card_art');
		}
	}, [isMobile]);

	React.useEffect(() => {
		const cleanupBoxArt = () => {
			if (cleanupBoxArtRef.current) {
				cleanupBoxArtRef.current();
				cleanupBoxArtRef.current = null;
			}
		};

		const initBoxArt = () => {
			if (!heroRef.current) return;

			cleanupBoxArt();
			cleanupBoxArtRef.current = renderBoxArt({
				container: heroRef.current,
				boxArt: "/assets/threed/sd_01.glb",
			});
		};

		const handlePageShow = (event) => {
			if (event.persisted) {
				initBoxArt();
			}
		};

		const handleVisibilityChange = () => {
			if (document.visibilityState === 'visible') {
				initBoxArt();
			}
		};

		initBoxArt();

		window.addEventListener('pageshow', handlePageShow);
		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			window.removeEventListener('pageshow', handlePageShow);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			cleanupBoxArt();
		};
	}, []);

  return (
	  [<section key={1} className="banner-one-container banner-one" id="banner">
		  <span className="banner-one__shape-1"></span>
		  <span className="banner-one__shape-2"></span>
		  <span className="banner-one__shape-3"></span>
		  <span className="banner-one__shape-4"></span>
		  <div className="container">
		  <div className="banner-one__moc" ref={bannerMocRef}>
		  <div id={`main_banner_box_art_3d`} className={``} ref={heroRef}></div> 
		  </div>
		  <div className="row">
		  <div className="col-xl-6 col-lg-7">
		  <div className="banner-one__content">
		  <Title />
		  {!isMobile ? <Subtitle /> : <></>}
		  <a href="#contact_us_singularity" className="banner-one__btn thm-btn ">
		  <span>Lets Talk</span>
		  </a>
		  </div>
		  </div>
		  </div>
		  </div>
		  </section>,
		  <CallToActionTwo />,
		  		  <CallToAction key={3} />,
		  <Brands key={2} />,
	  ]
  );

	function Title() {
		return title ? (
			<h3 className="title banner-one__title">
				<BoldsBreaksAndSpans BBS={title} />
			</h3>
		) : (
			<></>
		);
	}

	function Subtitle() {
		return subtitle ? (
			<p className="banner-one__text">
				<BoldsBreaksAndSpans BBS={subtitle} />
			</p>
		) : (
			<></>
		);
	}
};

export default Banner;
