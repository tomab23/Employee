import { useNavigate } from "react-router";

const NavbarLogPart = () => {
  
  const navigate = useNavigate();
  const avatarName = "email"

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
            <img
              src={`https://api.dicebear.com/9.x/shapes/svg?seed=${avatarName}`}
              alt="avatar"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li onClick={() => navigate("/")}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarLogPart;
