import React from "react";
import { CirclePlus } from "lucide-react";

const ButtonAddEntreprise = () => {
  return (
    <button onClick={() => alert('New entreprise')} className="btn  btn-primary py-6 fixed bottom-20 right-10  max-lg:right-5">
      <CirclePlus size={32} />
    </button>
  );
};

export default ButtonAddEntreprise;
