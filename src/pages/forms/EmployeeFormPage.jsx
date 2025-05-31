import { useParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const EmployeeFormPage = () => {

    const {empId} = useParams();
    const isEdit = empId !== undefined;

  return (
    <div>
      <Navbar log back />

            {/* {isEdit ? 
      (
        <h1 className="text-center text-3xl my-5 font-semibold">Modification pour <span className="capitalize">"name"</span> {empId}</h1>
      ) : (
        <h1 className="text-center text-3xl my-5 font-bold">Création de votre entreprise</h1>
      )
    } */}
    a venir...
    </div>
  )
}

export default EmployeeFormPage
