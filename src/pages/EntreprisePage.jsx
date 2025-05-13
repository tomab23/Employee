import React from "react";
import Footer from "../components/layout/Footer";
import EntrepriseInfo from "../components/entreprise/EntrepriseInfo";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import EntrepriseStats from "../components/entreprise/EntrepriseStats";

const EntreprisePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar back />
      <h1 className="text-center text-3xl uppercase my-5">
        Nom de l'entreprise
      </h1>

      <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10">
        <EntrepriseInfo />
      </div>

      <div className="mx-5 mt-10 flex flex-col gap-3">
        <div className="flex justify-between gap-5">
          <p className="text-xl">Vos employés (3)</p>
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => alert("/create")}
          >
            + Ajouter un employé
          </button>
        </div>
        <button
          className="btn btn-primary w-fit"
          onClick={() => navigate("/list")}
        >
          Voir vos employés
        </button>
      </div>

      {/* STATS */}
      <div className="mt-20 flex">
        <EntrepriseStats />
      </div>

      <Footer fixed={true} />
    </div>
  );
};

export default EntreprisePage;
