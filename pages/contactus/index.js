import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import Footer from '../../components/Footer';
import SocialContacts from '../../components/SocialContacts';
import ContactUsComponent from '../../components/ContactUs';

const ContactUs = () => (
   <Layout pageTitle='Contact Us'>
      <NavOne />
      <ContactUsComponent mt={true} />
      <SocialContacts />
      <Footer />
   </Layout>
);

export default ContactUs;
