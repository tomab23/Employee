import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ContactPart = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div className="card card-md bg-neutral text-neutral-content w-[40rem] max-md:w-[100%]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{t("LANDING.CONTACT.TITLE")}</h2>
        <p>{t('LANDING.CONTACT.TEXT')}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPart;
