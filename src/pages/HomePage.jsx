import CustomBackButton from "../components/custom/CustomBackButton"
import ButtonAddEntreprise from "../components/entreprise/ButtonAddEntreprise"
import EntrepriseCard from "../components/entreprise/EntrepriseCard"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

const HomePage = () => {
  return (
    <div>
      <Navbar log />

      <h1 className="text-center text-5xl my-5 font-semibold">Vos entreprises</h1>

      <div className="mt-10 mx-5 flex gap-5">
            <EntrepriseCard />
        </div>

      {/* BUTTON ADD ENTREPRISE */}
      <ButtonAddEntreprise />

        <h2 className="mt-10">key test : {import.meta.env.VITE_SUPABASE_KEY}</h2>

        <Footer fixed />
    </div>
  )
}

export default HomePage