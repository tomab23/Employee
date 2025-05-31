import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";;

const EntrepriseFormPage = () => {

  const navigate = useNavigate();
  const {entId} = useParams();
  const isEdit = entId !== undefined;

  return (
    <div className="flex flex-col">
      <Navbar back log />
      {isEdit ? 
      (
        <h1 className="text-center text-3xl my-5 font-semibold">Modification pour <span className="capitalize">"name"</span> {entId}</h1>
      ) : (
        <h1 className="text-center text-3xl my-5 font-bold">Création de votre entreprise</h1>
      )
    }

    {/* FORM */}
    <div className="bg-base-300 w-[50vw] self-center flex flex-col gap-2 p-2">
      <p>Name</p>
      <p>Logo ? <i>(pour la suite)</i></p>
      <p>Description</p>
      <p>Location</p>
      <p>date d'ouverture</p>
      <p>date de fermeture ?</p>

      <button className="btn mt-10 w-fit bg-base-200 p-2 rounded-lg self-center"
      onClick={() => navigate("/home")}
      >Valider</button>
    </div>

    {isEdit && <button className="btn btn-error mt-20 w-fit self-center">Supprimer l'entreprise</button>}

    <Footer fixed />
    </div>
  )
}

export default EntrepriseFormPage