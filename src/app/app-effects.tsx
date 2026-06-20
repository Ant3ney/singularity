'use client';

import { useEffect } from 'react';
import warningErrorFilter from '@/config/warningErrorFilter';

export default function AppEffects() {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		warningErrorFilter();

		window.dataLayer = window.dataLayer || [];

		function gtag(...args: unknown[]) {
			window.dataLayer.push(args);
		}

		window.gtag = gtag;

		gtag('js', new Date());
		gtag('config', 'AW-1005517184');

		window.gtag_report_conversion = function gtagReportConversion(url?: string) {
			const callback = function callback() {
				if (url) {
					window.top.location.href = url;
				}
			};

			window.gtag('event', 'conversion', {
				send_to: 'AW-1005517184/afMlCKqXkeIbEIDzu98D',
				value: 1.0,
				currency: 'USD',
				event_callback: callback,
			});

			return false;
		};
	}, []);

	return null;
}
