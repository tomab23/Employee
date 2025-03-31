import { useNavigate } from "react-router-dom";
import img from "../assets/imgs/contact.svg";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/forms/ContactForm";

const ContactPage = () => {

    const navigate = useNavigate();
  return (
    <div className="min-h-[100vh]">
      <div className="navbar bg-base-300 shadow-sm">
        <a className="btn btn-ghost text-xl" onClick={() => navigate(-1)}>Retour</a>
      </div>
      <div className="min-h-[90vh] mx-2 flex max-md:flex-col-reverse justify-center max-md:justify-end items-center gap-15 2xl:gap-40  max-xl:gap-10 max-md:gap-5">
        <ContactForm />
        <img src={img} alt="" className="w-120 max-xl:w-100 max-md:w-80" title='illustrations by Storyset' />
      </div>
      <Footer fixed />
    </div>
  );
};

export default ContactPage;
