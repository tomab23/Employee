import { useParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const EntrepriseFormPage = () => {

  const {entId} = useParams();
  const isEdit = entId !== undefined;

  return (
    <div>
      <Navbar back log />
      {isEdit ? 
      (
        <h1>Modification entreprise id {entId}</h1>
      ) : (
        <h1>nouvel entreprise</h1>
      )
    }
    </div>
  )
}

export default EntrepriseFormPage