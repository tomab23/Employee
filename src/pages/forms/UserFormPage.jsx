import { useParams } from "react-router-dom";

const UserFormPage = () => {

    const {userId} = useParams();
    // const isEdit = userId !== undefined;
    
  return (
    <div>UserFormPage</div>
  )
}

export default UserFormPage