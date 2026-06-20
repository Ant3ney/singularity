import React from 'react';
import Layout from '../components/Layout';
import WaitlistFlow from '../components/WaitlistFlow';

export default function WaitlistPage() {
	return (
		<Layout pageTitle='Join Waitlist | Singularity'>
			<WaitlistFlow />
		</Layout>
	);
}
