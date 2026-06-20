import Layout from '@/components/Layout';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaitlistFlow from '@/components/WaitlistFlow';

export const metadata = {
	title: 'Join Waitlist | Singularity',
};

export default function WaitlistPage() {
	return (
		<Layout>
			<Nav />
			<WaitlistFlow />
			<Footer />
		</Layout>
	);
}
