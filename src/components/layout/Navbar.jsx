import { useNavigate } from "react-router";
import NavbarLogPart from "./NavbarLogPart";
import { useEffect, useState } from "react";
import { supabase } from "../../SupabaseClient";

const Navbar = ({ back }) => {

  const navigate = useNavigate();

  const backHome = () => {
    if(session) {
      navigate('/home')
    }
  }

    const [session, setSession] = useState(null)
  
    
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
          <a className="btn btn-ghost text-xl" onClick={() => navigate(-1)}>Retour</a>
        </div>
      ) : (
        <div className="flex-1">
          <a className={`btn btn-ghost text-xl ${!session && "cursor-default"}`} onClick={backHome}>Employee</a>
        </div>
      )}
      {/* BUTTONS */}
      {session ?
      (
        <NavbarLogPart />
      ) :
    (
      <div className="flex items-center gap-3">
      <button className="btn" onClick={() => navigate("/sign")}>Inscription</button>
      <button className="btn btn-ghost" onClick={() => navigate("/login")}>Connexion</button>
    </div>
    )
      }
    </div>
  );
};

export default Navbar;
