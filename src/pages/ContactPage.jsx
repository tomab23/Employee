import img from "../assets/imgs/contact.svg";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/forms/ContactForm";
import Navbar from "../components/layout/Navbar";


const ContactPage = () => {

  return (
    <div className="min-h-[100vh]">
      <Navbar back />
      <div className="min-h-[90vh] mx-2 flex max-md:flex-col-reverse justify-center max-md:justify-end items-center gap-15 2xl:gap-40  max-xl:gap-10 max-md:gap-5">
        <ContactForm />
        <img src={img} alt="" loading="lazy" className="w-120 max-xl:w-100 max-md:w-80 max-sm:w-50" title='illustrations by Storyset' />
      </div>
      <Footer fixed />
    </div>
  );
};

export default ContactPage;
