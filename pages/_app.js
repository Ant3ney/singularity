import '../node_modules/react-modal-video/scss/modal-video.scss';
import warningErrorFilter from '../config/warningErrorFilter';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
   warningErrorFilter();
   return <Component {...pageProps} suppressHydrationWarning={true} />;
}
