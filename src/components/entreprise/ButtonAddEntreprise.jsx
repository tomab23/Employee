import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ButtonAddEntreprise = () => {

  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/entreprise-form")} className="btn  btn-primary py-6 fixed bottom-20 right-10  max-lg:right-5">
      <CirclePlus size={32} />
    </button>
  );
};

export default ButtonAddEntreprise;
