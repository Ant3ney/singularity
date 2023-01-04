import warningErrorFilter from "../config/warningErrorFilter";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let dataLayer = window.dataLayer;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-1005517184");
    window.gtag = gtag;
  }, []);
  warningErrorFilter();
  return <Component {...pageProps} suppressHydrationWarning={true} />;
}
