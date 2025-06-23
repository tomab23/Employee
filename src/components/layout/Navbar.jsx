import { useNavigate } from "react-router";
import NavbarLogPart from "./NavbarLogPart";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = ({ back }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const  { isAuthenticated } = useAuth()

  return (
    <div className="navbar bg-base-300 shadow-sm">
      {back ? (
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" onClick={() => navigate(-1)}>
            {t('BUTTON.BACK')}
          </a>
        </div>
      ) : (
        <div className="flex-1">
          <p className="px-4 font-semibold text-xl cursor-default">Employee</p>
        </div>
      )}
      {/* BUTTONS */}
        <div>
          {isAuthenticated ? (
            <NavbarLogPart />
          ) : (
            <div className="flex items-center gap-3">
              <button className="btn" onClick={() => navigate("/sign")}>
                {t('LOG.REGISTER')}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => navigate("/login")}
              >
                {t('LOG.LOGIN')}
              </button>
            </div>
          )}
        </div>
    </div>
  );
};

export default Navbar;
