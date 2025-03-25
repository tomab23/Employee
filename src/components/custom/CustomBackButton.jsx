import { useNavigate } from "react-router-dom"


const CustomBackButton = () => {

    const navigate = useNavigate();

  return (
    <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
  )
}

export default CustomBackButton