import React, { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import EntrepriseInfo from "../components/entreprise/EntrepriseInfo";
import Navbar from "../components/layout/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import EntrepriseStats from "../components/entreprise/EntrepriseStats";
import { EntrepriseListMock } from "../mocks/EntrepriseListMock";
import BadgeCloseEntreprise from "../components/entreprise/BadgeCloseEntreprise";

const EntreprisePage = () => {
  const navigate = useNavigate();

  const {entId}  = useParams();

    const [ent, setEnt] = useState({
    id: null,
    name: "",
    resume: "",
  });

    useEffect(() => {
    const entrepriseById = EntrepriseListMock.find(
      (ent) => ent.id === Number(entId)
    );
    setEnt(entrepriseById);
  }, [entId]);


  return (
    <div>
      <Navbar back />
      <h1 className="text-center text-3xl font-semibold capitalize my-5">
        {ent?.name} {" "}
        {ent?.close && <BadgeCloseEntreprise />}
      </h1>

      <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10">
        <EntrepriseInfo entreprise={ent} />
      </div>

      <div className="mx-5 mt-10 flex flex-col gap-3">
        <div className="flex justify-between gap-5">
          <p className="text-xl">Vos employés (3)</p>
          <button
            className="btn btn-outline btn-primary btn-sm"
            onClick={() => navigate("/employee-form")}
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

      <div className="flex justify-center mt-40 max-sm:mt-5 mb-20 ">
        {!ent.close && <button className="btn btn-error text-center ">Fermer l'entreprise</button>}
        {ent.close && <button className="btn btn-success text-center ">Ouvrir l'entreprise</button>}
      </div>
      {/* => POPUP de validation ? */}

      <Footer fixed={true} />
    </div>
  );
};

export default EntreprisePage;
