import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SocialContacts from '../../components/SocialContacts';
import ContactUsComponent from '../../components/ContactUs';

const ContactUs = () => (
   <Layout pageTitle='Contact Us'>
      <Nav current='contactus' />
      <ContactUsComponent mt={true} />
      <SocialContacts />
      <Footer />
   </Layout>
);

export default ContactUs;
