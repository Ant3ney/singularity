import React, { useEffect } from 'react';
import Head from 'next/head';
import warningErrorFilter from '../config/warningErrorFilter';

const Layout = props => {
	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'AW-1005517184');

		window.gtag = gtag;
	}, []);
	return (
		<div>
			<Head>
				<title>{props.pageTitle}</title>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<link rel='apple-touch-icon' sizes='180x180' href='/assets/images/favicons/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/assets/images/favicons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/assets/images/favicons/favicon-16x16.png' />
				<link
					href='https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap'
					rel='stylesheet'
				/>
				<link rel='stylesheet' href='/assets/css/animate.min.css' />
				<link rel='stylesheet' href='/assets/css/bootstrap.min.css' />
				<link rel='stylesheet' href='/assets/css/font-awesome.min.css' />
				<link rel='stylesheet' href='/assets/plugins/dimon-icons/style.css' />
				<link rel='stylesheet' href='/assets/css/style.css' />
				<link rel='stylesheet' href='/assets/css/responsive.css' />
				{/* Global site tag (gtag.js) - Google Ads: 1005517184 */}
				<script async src='https://www.googletagmanager.com/gtag/js?id=AW-1005517184'></script>
			</Head>
			<div className='page-wrapper'>{props.children}</div>
		</div>
	);
};
export default Layout;
