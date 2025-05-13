import ScrollToTopButton from "../components/custom/ScrollToTopButton";
import Accordions from "../components/landing/Accordions";
import ContactPart from "../components/landing/ContactPart";
import HeroLanding from "../components/landing/HeroLanding"
import LinksPart from "../components/landing/LinksPart";
import Navbar from "../components/layout/Navbar"
import Footer from './../components/layout/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center mt-20">
        <HeroLanding />
      </div>

      <div className="flex flex-col items-center justify-center my-20 max-sm:px-5 gap-20 sm:mx-5">
        <Accordions />
        <ContactPart />
        <LinksPart />
      </div> 

      <ScrollToTopButton />
      <Footer fixed={false}  />
    </div>
  )
}

export default LandingPage