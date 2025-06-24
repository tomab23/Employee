import img from "../assets/imgs/contact.svg";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/forms/ContactForm";
import Navbar from "../components/layout/Navbar";
import { useAuth } from "../contexts/AuthContext";
import * as Yup from "yup";
import { useFormik } from "formik";


const ContactPage = () => {
  const { isAuthenticated, userMetadata } = useAuth();

  const name = userMetadata?.first_name + " " + userMetadata?.last_name

    const ValidSchema = Yup.object().shape({
      email: Yup.string()
        .email("Adresse email invalide")
        .required("Adresse email obligatoire"),
    });

    const Test = (values, resetForm) => {
        alert(JSON.stringify(values))
        resetForm();
    }
  
    const formik = useFormik({
      initialValues: {
        name: isAuthenticated ? name : "" ,
        email: isAuthenticated ? userMetadata.email : "",
        message: "",
      },
      enableReinitialize: true,
      validationSchema: ValidSchema,
      onSubmit: (values, {resetForm} ) => {
        Test(values, resetForm)
      },
    });

  return (
    <div className="min-h-[100vh]">
      <Navbar back />
      <div className="min-h-[90vh] mx-2 flex max-md:flex-col-reverse justify-center max-md:justify-end items-center gap-15 2xl:gap-40  max-xl:gap-10 max-md:gap-5">
        <form onSubmit={formik.handleSubmit}>
          <ContactForm formik={formik} />
        </form>
        <img src={img} alt="" loading="lazy" className="w-120 max-xl:w-100 max-md:w-80 max-sm:w-50" title='illustrations by Storyset' />
      </div>
      <Footer fixed />
    </div>
  );
};

export default ContactPage;
