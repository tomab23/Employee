import Accordions from "../components/landing/Accordions";
import HeroLanding from "../components/landing/HeroLanding"
import Navbar from "../components/layout/Navbar"
import Footer from './../components/layout/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar log={false} />

      <div className="flex justify-center mt-20">
        <HeroLanding />
      </div>

      <div className="flex flex-col items-center justify-center my-20 max-sm:px-5 gap-20">
        <Accordions />
      </div>

      <Footer fixed={false}  />
    </div>
  )
}

export default LandingPage