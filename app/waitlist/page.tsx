import Layout from '@/components/Layout';
import WaitlistFlow from '@/components/WaitlistFlow';

export const metadata = {
	title: 'Join Waitlist | Singularity',
};

export default function WaitlistPage() {
	return (
		<Layout>
			<WaitlistFlow />
		</Layout>
	);
}
