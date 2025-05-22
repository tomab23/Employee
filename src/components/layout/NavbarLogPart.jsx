import { useNavigate } from "react-router";
import { supabase } from "../../SupabaseClient";
import Avatar from "../profile/Avatar";

const NavbarLogPart = () => {
  const navigate = useNavigate();

  async function signOut() {
    navigate("/");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Avatar />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
        >
          <li>
            <a className="justify-between" onClick={() => navigate("/home")}>
              Entreprises
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li>
            <a className="justify-between" onClick={() => navigate("/profile")}>
              Profil
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/contact")}>Contact</a>
          </li>
          <li>
            <a onClick={() => navigate("/dev")}>Développement</a>
          </li>
          <div className="divider -my-1"></div>
          <li onClick={signOut}>
            <a>Déconnexion</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLogPart;
