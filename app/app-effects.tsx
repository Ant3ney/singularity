'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import warningErrorFilter from '@/config/warningErrorFilter';
import { GOOGLE_ADS_LEAD_CONVERSION, GOOGLE_PAGE_VIEW_DESTINATIONS } from '@/config/googleTag';

export default function AppEffects() {
	const pathname = usePathname();
	const previousPathname = useRef(pathname);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		warningErrorFilter();

		window.gtag_report_conversion = function gtagReportConversion(url?: string) {
			let redirected = false;
			const callback = function callback() {
				if (url && !redirected) {
					redirected = true;
					window.top.location.href = url;
				}
			};

			window.gtag('event', 'conversion', {
				send_to: GOOGLE_ADS_LEAD_CONVERSION,
				value: 1.0,
				currency: 'USD',
				event_callback: callback,
			});

			if (url) {
				window.setTimeout(callback, 2000);
			}

			return false;
		};
	}, []);

	useEffect(() => {
		if (previousPathname.current === pathname) return;

		previousPathname.current = pathname;
		window.gtag('event', 'page_view', {
			send_to: GOOGLE_PAGE_VIEW_DESTINATIONS,
			page_location: window.location.href,
			page_title: document.title,
		});
	}, [pathname]);

	return null;
}
