'use client';

import Nav from 'components/Nav';
import Layout from '../components/Layout';
import BuildComponents from './body/BuildComponents';

type DynamicProps = {
	body?: any;
};

export default function Dynamic(props: DynamicProps) {
	let { body } = props;
	let JSX;
	if (body && !body.hasFailed) {
		JSX = BuildComponents(body);
	}

	if (!body) {
		return (
			<Layout>
				<div>Loading page...</div>
			</Layout>
		);
	} else if (body.hasFailed) {
		return (
			<Layout>
				<div>Failed to load body</div>
			</Layout>
		);
	}
	return (
		<Layout>
			<Nav />
			<>{JSX}</>
		</Layout>
	);
}
