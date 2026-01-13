import { useEffect } from "react";
import warningErrorFilter from "../config/warningErrorFilter";
import "../public/assets/scss/custom/style.scss";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    warningErrorFilter();

    // ---- Load Google Ads script dynamically ----
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-1005517184";
    script.async = true;
    document.head.appendChild(script);

    // ---- Init dataLayer + gtag ----
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "AW-1005517184");

    // ---- ✅ ADD CONVERSION FUNCTION HERE ----
    window.gtag_report_conversion = function (url) {
      const callback = function () {
        if (url) {
          // bypass Vercel routing
          window.top.location.href = url;
        }
      };

      window.gtag("event", "conversion", {
        send_to: "AW-1005517184/afMlCKqXkeIbEIDzu98D",
        value: 1.0,
        currency: "USD",
        event_callback: callback,
      });

      return false;
    };

    // ---- Cleanup ----
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} suppressHydrationWarning />;
}
