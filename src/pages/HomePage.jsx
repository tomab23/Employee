import { useTranslation } from "react-i18next"
import CustomBackButton from "../components/custom/CustomBackButton"
import ButtonAddEntreprise from "../components/entreprise/ButtonAddEntreprise"
import EntrepriseCard from "../components/entreprise/EntrepriseCard"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import { useEffect, useState } from "react"
import { supabase } from "../SupabaseClient"

const HomePage = () => {

  const { t } = useTranslation();
  const [session, setSession] = useState(null)

  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
  }, [])



  return (
    <div>
      <Navbar log />

      <h1 className="text-center text-3xl my-5 font-semibold">Bonjour {session?.user?.email}</h1>

      <h1 className="text-center text-5xl my-5 font-semibold">Vos entreprises</h1>

      <div className="mt-10 mx-5 flex gap-5">
            <EntrepriseCard />
        </div>

        <p className="my-5 mx-5">Langue : {t("TEST")}</p>

      {/* BUTTON ADD ENTREPRISE */}
      <ButtonAddEntreprise />

        <Footer fixed />
    </div>
  )
}

export default HomePage