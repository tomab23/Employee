import { useParams } from "react-router-dom";

const EmployeeFormPage = () => {

    const {empId} = useParams();
    const isEdit = empId !== undefined;

  return (
    <div>EmployeeFormPage</div>
  )
}

export default EmployeeFormPage
