import { useNavigate } from "react-router";
import NavbarLogPart from "./NavbarLogPart";

const Navbar = ( { log }) => {

  const navigate = useNavigate();

  const backHome = () => {
    if(log) {
      navigate('/home')
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className={`btn btn-ghost text-xl ${!log && "cursor-default"}`} onClick={backHome}>Employee</a>
      </div>
      {/* BUTTONS */}
      {log ?
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
