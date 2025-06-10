import { useNavigate } from "react-router";
import NavbarLogPart from "./NavbarLogPart";
import { useEffect, useState } from "react";
import { supabase } from "../../SupabaseClient";
import { useTranslation } from "react-i18next";

const Navbar = ({ back, log }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

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
          {/* <a
            className={`btn btn-ghost text-xl ${!session && "cursor-default"}`}
            onClick={backHome}
          >
            Employee
          </a> */}
          <p className="px-4 font-semibold text-xl cursor-default">Employee</p>
        </div>
      )}
      {/* BUTTONS */}
      {log ? (
        <NavbarLogPart />
      ) : (
        <div>
          {session ? (
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
                {t('LOG.REGISTER')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
