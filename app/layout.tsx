import type { Metadata } from 'next';
import Script from 'next/script';
import AppEffects from './app-effects';
import './globals.scss';

export const metadata: Metadata = {
	title: '',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
				<link
					href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="/assets/css/animate.min.css" />
				<link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
				<link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
				<link rel="stylesheet" href="/assets/plugins/dimon-icons/style.css" />
				<link rel="stylesheet" href="/assets/css/style.css" />
				<link rel="stylesheet" href="/assets/css/responsive.css" />
			</head>
			<body>
				<Script src="https://www.googletagmanager.com/gtag/js?id=AW-1005517184" strategy="afterInteractive" />
				<AppEffects />
				{children}
			</body>
		</html>
	);
}
