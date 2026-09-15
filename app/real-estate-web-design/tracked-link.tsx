'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	eventName: string;
	eventLabel: string;
};

export default function TrackedLink({
	eventName,
	eventLabel,
	onClick,
	...props
}: TrackedLinkProps) {
	function handleClick(event: MouseEvent<HTMLAnchorElement>) {
		if (typeof window.gtag === 'function') {
			window.gtag('event', eventName, {
				event_label: eventLabel,
				page_path: '/real-estate-web-design',
			});
		}
		onClick?.(event);
	}

	return <a {...props} onClick={handleClick} />;
}
