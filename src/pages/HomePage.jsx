import { useTranslation } from "react-i18next";
import ButtonAddEntreprise from "../components/entreprise/ButtonAddEntreprise";
import EntrepriseCard from "../components/entreprise/EntrepriseCard";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { EntrepriseListMock } from "../mocks/EntrepriseListMock";
import TestCardEntreprise from "../components/entreprise/TestCardEntreprise";
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { t } = useTranslation();

  const { userMetadata, error } = useAuth();

  const entList = EntrepriseListMock;

    if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-red-500">Erreur : {error}</div>
      </div>
    );
  }
  


  return (
    <div>
      <Navbar />

      <h1 className="text-center text-3xl my-5 font-semibold">
        Bonjour {userMetadata?.first_name} {userMetadata?.last_name}
      </h1>

      <h1 className="text-center text-5xl my-5 font-semibold">
        Vos entreprises
      </h1>

      <div className="flex justify-start ml-5 mt-2">
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn"
            type="radio"
            name="entreprise"
            aria-label="All"
          />
          <input
            className="btn"
            type="radio"
            name="entreprise"
            aria-label="Open"
          />
          <input
            className="btn"
            type="radio"
            name="entreprise"
            aria-label="Close"
          />
        </form>
      </div>

      <div className="mt-5 mx-5 flex gap-5">
        <TestCardEntreprise />
        {entList.map((ent) => (
          <EntrepriseCard key={ent.id} entreprise={ent} />
        ))}
      </div>

      <p className="mt-10 mx-5">Langue : {t("TEST")}</p>

      {/* BUTTON ADD ENTREPRISE */}
      <ButtonAddEntreprise />

      <Footer fixed />
    </div>
  );
};

export default HomePage;
