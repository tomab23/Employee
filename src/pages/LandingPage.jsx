import HeroLanding from "../components/HeroLanding"
import Navbar from "../components/layout/Navbar"

const LandingPage = () => {
  return (
    <div>
      <Navbar log={false} />

      <div className="flex justify-center mt-20">
        <HeroLanding />
      </div>
    </div>
  )
}

export default LandingPage