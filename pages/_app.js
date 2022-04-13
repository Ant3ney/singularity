import '../node_modules/react-modal-video/scss/modal-video.scss';
import warningErrorFilter from '../config/warningErrorFilter';
import { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		let dataLayer = window.dataLayer;
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer ? dataLayer.push(arguments) : console.log('data layer is not defined');
		}
		gtag('js', new Date());
		gtag('config', 'AW-1005517184');

		/* Event snippet for Website lead conversion page */

		gtag('event', 'conversion', { send_to: 'AW-1005517184/ChCeCO_NwrIDEIDzu98D' });
	}, []);
	warningErrorFilter();
	return <Component {...pageProps} suppressHydrationWarning={true} />;
}
