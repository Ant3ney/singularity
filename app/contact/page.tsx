import Layout from '@/components/Layout';
import Nav from '@/components/Nav';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Contact | Singularity',
};

export default function ContactPage() {
	return (
		<Layout>
			<Nav current="contactus" />
			<main className="contact-page">
				<ContactUs />
			</main>
			<Footer />
		</Layout>
	);
}
