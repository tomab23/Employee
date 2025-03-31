import { useNavigate } from "react-router-dom";

const ContactPart = () => {

    const navigate = useNavigate();

  return (
    <div className="card card-md bg-neutral text-neutral-content w-[40rem] max-md:w-[100%]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Vous avez des questions ?</h2>
        <p>N'hésitez pas à nous contacter.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPart;
