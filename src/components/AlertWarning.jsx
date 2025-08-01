import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AlertWarning = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <div role="alert" className="alert alert-info alert-vertical w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{t('WARN.DEV')} <i className="hover:underline hover:cursor-pointer" onClick={() => navigate("/dev")}>{t('WARN.SEE')}</i></span>
      {/* <button className="btn btn-sm bg-warning border-none">X</button> */}
    </div>
  );
};

export default AlertWarning;
