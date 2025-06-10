import { UserRound , UsersRound, BookUser } from "lucide-react";
import AlertWarning from "../components/AlertWarning";
import ScrollToTopButton from "../components/custom/ScrollToTopButton";
import Accordions from "../components/landing/Accordions";
import ContactPart from "../components/landing/ContactPart";
import HeroLanding from "../components/landing/HeroLanding";
import LinksPart from "../components/landing/LinksPart";
import Navbar from "../components/layout/Navbar";
import Footer from "./../components/layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

{/* ICONS BOUNCE */}
            <div className="absolute top-20 left-10 max-sm:left-1 animate-float">
        <UserRound className="w-8 h-8 text-secondary fill-current opacity-60" />
      </div>
      <div className="absolute top-32 right-20 max-sm:right-1 animate-bounce-gentle">
        <UsersRound className="w-8 h-8 text-primary fill-current opacity-50" />
      </div>
            <div className="absolute bottom-96 left-16 max-sm:left-1 animate-float" style={{ animationDelay: '1s' }}>
        <BookUser className="w-10 h-10 text-accent-foreground opacity-40" />
      </div>

      {/* ALERT */}
      <div className="flex justify-center mt-2">
        <AlertWarning />
      </div>

      <div className="flex justify-center mt-10"> 
        <HeroLanding />
      </div>

      <div className="flex flex-col items-center justify-center my-20 max-sm:px-5 gap-20 sm:mx-5">
        <Accordions />
        <ContactPart />
        <LinksPart />
      </div>

      <ScrollToTopButton />
      <Footer fixed={false} />
    </div>
  );
};

export default LandingPage;
