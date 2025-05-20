import { useParams } from "react-router-dom";

const EntrepriseFormPage = () => {

  const {entId} = useParams();
  const isEdit = entId !== undefined;

  return (
    <div>
      {isEdit ? 
      (
        <h1>Modification entreprise</h1>
      ) : (
        <h1>nouvel entreprise</h1>
      )
    }
    </div>
  )
}

export default EntrepriseFormPage