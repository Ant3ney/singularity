"use client";

import { useEffect } from "react";
import warningErrorFilter from "../config/warningErrorFilter";

export default function ClientProviders({ children }) {
  useEffect(() => {
    warningErrorFilter();

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "AW-1005517184");

    window.gtag_report_conversion = function (url) {
      const callback = function () {
        if (url) {
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
  }, []);

  return children;
}
