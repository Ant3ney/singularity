import React from "react";
import { useMediaQuery } from "react-responsive";
import BoldsBreaksAndSpans from "components/BoldsBreaksAndSpans";
import renderBoxArt from './renderBoxArt'; 
import Brands from '../Brands';
import Features from '../Features';
import CallToAction from '../CallToAction';
import CallToActionTwo from '../CallToActionTwo';


const BLANK_GATE_MS = 1000;
const SEQUENCE_B_FADE_IN_MS = 1000;
const SEQUENCE_B_VISIBLE_MS = 3000;
const LOADER_OUTRO_MS = 2000;
const BOX_ART_WATCHDOG_MS = 18000;
const LOADER_TICK_MS = 150;

//pu
//TODO: Update sanity and builder APIs and let it know that the cover art is static now
const Banner = ({
	title,
	subtitle,
}) => {
	const bannerMocRef = React.useRef(null);
	const heroRef = React.useRef(null);
	const cleanupBoxArtRef = React.useRef(null);
	const loadRunRef = React.useRef(0);
	const loadStartedAtRef = React.useRef(0);
	const boxArtStatusRef = React.useRef('loading');
	const loaderPhaseRef = React.useRef('blank');
	const loaderCompleteRef = React.useRef(false);
	const outroStartedRef = React.useRef(false);
	const loaderVisualRef = React.useRef({ screenOpacity: 1, uiOpacity: 0 });
	const scrollLockStateRef = React.useRef(null);
	const [boxArtStatus, setBoxArtStatus] = React.useState('loading');
	const [loaderCycle, setLoaderCycle] = React.useState(0);
	const [loaderPhase, setLoaderPhase] = React.useState('blank');
	const [loaderVisual, setLoaderVisual] = React.useState({ screenOpacity: 1, uiOpacity: 0 });
	const shouldLockScroll = loaderPhase !== 'done' && (loaderPhase !== 'outro' || loaderVisual.screenOpacity > 0.75);
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
		const updateBoxArtStatus = (status) => {
			boxArtStatusRef.current = status;
			setBoxArtStatus(status);
		};

		const initBoxArt = () => {
			if (!heroRef.current) return;

			const loadRun = loadRunRef.current + 1;
			loadRunRef.current = loadRun;
			loadStartedAtRef.current = loadRun === 1
				? 0
				: (typeof window !== 'undefined' && window.performance?.now
					? window.performance.now()
					: Date.now());
			loaderCompleteRef.current = false;
			outroStartedRef.current = false;
			updateBoxArtStatus('loading');
			setLoaderPhase('blank');
			loaderPhaseRef.current = 'blank';
			loaderVisualRef.current = { screenOpacity: 1, uiOpacity: 0 };
			setLoaderVisual({ screenOpacity: 1, uiOpacity: 0 });
			setLoaderCycle((currentCycle) => currentCycle + 1);
			cleanupBoxArt();
			cleanupBoxArtRef.current = renderBoxArt({
				container: heroRef.current,
				boxArt: "/assets/threed/sd_01.glb",
				onLoaded: () => {
					if (loadRunRef.current === loadRun) {
						updateBoxArtStatus('ready');
					}
				},
				onError: () => {
					if (loadRunRef.current === loadRun) {
						updateBoxArtStatus('error');
					}
				},
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

	React.useEffect(() => {
		boxArtStatusRef.current = boxArtStatus;
	}, [boxArtStatus]);

	React.useEffect(() => {
		let isCancelled = false;
		const timers = [];
		const animationFrames = [];
		const now = () => {
			if (typeof window === 'undefined' || !window.performance?.now) {
				return Date.now();
			}

			return window.performance.now();
		};
		const getElapsed = () => now() - loadStartedAtRef.current;
		const setTimer = (callback, delay) => {
			const timer = window.setTimeout(callback, Math.max(0, delay));
			timers.push(timer);
			return timer;
		};
		const setVisual = (visual) => {
			loaderVisualRef.current = {
				...loaderVisualRef.current,
				...visual,
			};
			setLoaderVisual(loaderVisualRef.current);
		};
		const animateVisual = ({ key, to, duration, onComplete }) => {
			const from = loaderVisualRef.current[key];
			const startedAt = now();

			const tick = () => {
				if (isCancelled) return;

				const progress = duration <= 0 ? 1 : Math.min(1, (now() - startedAt) / duration);
				const easedProgress = progress < 0.5
					? 2 * progress * progress
					: 1 - Math.pow(-2 * progress + 2, 2) / 2;
				setVisual({ [key]: from + (to - from) * easedProgress });

				if (progress < 1) {
					const frame = window.requestAnimationFrame(tick);
					animationFrames.push(frame);
					return;
				}

				setVisual({ [key]: to });
				if (typeof onComplete === 'function') {
					onComplete();
				}
			};

			const frame = window.requestAnimationFrame(tick);
			animationFrames.push(frame);
		};
		const isLoaded = () => boxArtStatusRef.current === 'ready';
		const isFinished = () => boxArtStatusRef.current === 'ready' || boxArtStatusRef.current === 'error';
		const setPhase = (phase) => {
			if (!isCancelled) {
				loaderPhaseRef.current = phase;
				setLoaderPhase(phase);
			}
		};
		const runOutro = () => {
			if (loaderCompleteRef.current || outroStartedRef.current) return;

			outroStartedRef.current = true;
			setPhase('outro');
			animateVisual({
				key: 'screenOpacity',
				to: 0,
				duration: LOADER_OUTRO_MS,
				onComplete: () => {
					loaderCompleteRef.current = true;
					setPhase('done');
				},
			});
		};
		const waitForFinished = () => {
			if (isCancelled || loaderCompleteRef.current || outroStartedRef.current) return;

			if (isFinished()) {
				runOutro();
				return;
			}

			setTimer(waitForFinished, LOADER_TICK_MS);
		};
		const startSequenceB = () => {
			if (loaderPhaseRef.current !== 'blank') return;

			setPhase('sequence-b');
			animateVisual({
				key: 'uiOpacity',
				to: 1,
				duration: SEQUENCE_B_FADE_IN_MS,
				onComplete: () => {
					if (loaderCompleteRef.current || outroStartedRef.current) return;

					setPhase('hold');
				},
			});
			setTimer(waitForFinished, SEQUENCE_B_FADE_IN_MS + SEQUENCE_B_VISIBLE_MS);
		};
		const forceBoxArtError = () => {
			if (isFinished()) return;

			boxArtStatusRef.current = 'error';
			setBoxArtStatus('error');
			waitForFinished();
		};

		setTimer(() => {
			if (isCancelled) return;

			if (isLoaded()) {
				runOutro();
				return;
			}

			startSequenceB();
		}, BLANK_GATE_MS - getElapsed());

		setTimer(forceBoxArtError, BOX_ART_WATCHDOG_MS - getElapsed());

		return () => {
			isCancelled = true;
			timers.forEach((timer) => window.clearTimeout(timer));
			animationFrames.forEach((frame) => window.cancelAnimationFrame(frame));
		};
	}, [loaderCycle]);

	React.useEffect(() => {
		if (typeof window === 'undefined' || typeof document === 'undefined') return undefined;

		const html = document.documentElement;
		const body = document.body;
		const unlockScroll = () => {
			const lockState = scrollLockStateRef.current;
			if (!lockState) return;

			html.style.overflow = lockState.htmlOverflow;
			html.style.overscrollBehavior = lockState.htmlOverscrollBehavior;
			body.style.overflow = lockState.bodyOverflow;
			body.style.overscrollBehavior = lockState.bodyOverscrollBehavior;
			body.style.position = lockState.bodyPosition;
			body.style.top = lockState.bodyTop;
			body.style.left = lockState.bodyLeft;
			body.style.right = lockState.bodyRight;
			body.style.width = lockState.bodyWidth;
			body.style.touchAction = lockState.bodyTouchAction;
			window.scrollTo(0, lockState.scrollY);
			scrollLockStateRef.current = null;
		};

		if (!shouldLockScroll) {
			unlockScroll();
			return undefined;
		}

		if (!scrollLockStateRef.current) {
			const scrollY = window.scrollY || window.pageYOffset || 0;
			scrollLockStateRef.current = {
				scrollY,
				htmlOverflow: html.style.overflow,
				htmlOverscrollBehavior: html.style.overscrollBehavior,
				bodyOverflow: body.style.overflow,
				bodyOverscrollBehavior: body.style.overscrollBehavior,
				bodyPosition: body.style.position,
				bodyTop: body.style.top,
				bodyLeft: body.style.left,
				bodyRight: body.style.right,
				bodyWidth: body.style.width,
				bodyTouchAction: body.style.touchAction,
			};

			html.style.overflow = 'hidden';
			html.style.overscrollBehavior = 'none';
			body.style.overflow = 'hidden';
			body.style.overscrollBehavior = 'none';
			body.style.position = 'fixed';
			body.style.top = `-${scrollY}px`;
			body.style.left = '0';
			body.style.right = '0';
			body.style.width = '100%';
			body.style.touchAction = 'none';
		}

		return unlockScroll;
	}, [shouldLockScroll]);

  return (
	  [<section key={1} className="banner-one-container banner-one" id="banner">
		  <HeroLoader status={boxArtStatus} phase={loaderPhase} visual={loaderVisual} />
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

	function HeroLoader({ status, phase, visual }) {
		const isHidden = phase === 'done';
		const isError = status === 'error';
		const uiOpacity = Number.isFinite(visual.uiOpacity) ? visual.uiOpacity : 0;
		const loaderStyle = {
			opacity: visual.screenOpacity,
			visibility: isHidden ? 'hidden' : 'visible',
			pointerEvents: isHidden ? 'none' : 'auto',
			'--loader-ui-opacity': uiOpacity,
		};
		const firstWordStyle = {
			color: '#1f2930',
			opacity: uiOpacity,
		};
		const kingStyle = {
			opacity: uiOpacity,
		};

		return (
			<div className={`singularity-hero-loader is-${phase} ${isHidden ? 'is-hidden' : ''} ${isError ? 'has-error' : ''}`} style={loaderStyle} aria-hidden={isHidden}>
				<div className="singularity-hero-loader__waves" aria-hidden="true"></div>
				<div className="singularity-hero-loader__content">
					<div className="singularity-hero-loader__count">01 / 05</div>
					<div className="singularity-hero-loader__headline" aria-live="polite">
						<span style={firstWordStyle}>Design is</span>
						<span style={kingStyle}>King</span>
					</div>
				</div>
				<div className="singularity-hero-loader__status">
					<span>Loading</span>
					<i></i>
					<i></i>
					<i></i>
				</div>
			</div>
		);
	}

};

export default Banner;
