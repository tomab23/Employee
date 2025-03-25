import { useState } from "react";
import { useNavigate } from "react-router";
import CustomName from "../components/custom/CustomName";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logPath = () => {
    setLoading(true)
    setTimeout(() => {
        navigate("/home");
      }, 1000);
  }

  return (
    <div className="hero bg-base-300 min-h-screen">
      <CustomName />
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        {/*  FORM  */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* EMAIL */}
              <label className="fieldset-label">Email</label>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              {/* PASSWORD */}
              <label className="fieldset-label">Password</label>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  min="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>
              {/* FORGOT PASSWORD */}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {/* BUTTON */}
              <button
                className="btn btn-neutral mt-4"
                onClick={logPath}
              >
                {loading ? "Login..." : "Login"}
                {loading && <span className="loading loading-bars"></span>}
              </button>
              {/* NEW USER ? */}
              <p
                className="mt-5 text-center italic hover:underline hover:cursor-pointer"
                onClick={() => navigate("/sign")}
              >
                Je n'ai pas de compte ? Inscription
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
