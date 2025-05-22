
import { useParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const UserFormPage = () => {

    const {userId} = useParams();
    
  return (
    <div>
      <Navbar back log />

      <p>User page : User id = {Number(userId)}</p>
    </div>
  )
}

export default UserFormPage