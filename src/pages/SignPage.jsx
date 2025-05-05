import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomName from "../components/custom/CustomName";
import * as Yup from "yup";
import { useFormik } from "formik";
import { supabase } from "../SupabaseClient";

const SignPage = ({ login }) => {
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ValidSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Adresse email obligatoire"),
    password: Yup.string()
      .min(8, "Votre password est trop court")
      .required("Le message est obligatoire"),
  });

  // SIGN UP
  const signUpNewUser = async (email, password) => {
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,   
    });

    if (error) {
      setLoading(false)
      console.error("Error signing up: ", error);
      return { success: false, error };
    }

    setLoading(false)
    navigate('/home')
    return { success: true, data };
  };

    // SIGN IN
    const signInUser = async (email, password) => {
      setLoading(true)
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
  
        // Handle Supabase error explicitly
        if (error) {
          console.error("Sign-in error:", error.message); // Log the error for debugging
          return { success: false, error: error.message }; // Return the error
        }
  
        // If no error, return success
        console.log("Sign-in success:", data);
        setLoading(false)
        navigate('/home')
        return { success: true, data }; // Return the user data
      } catch (error) {
        // Handle unexpected issues
        console.error("Unexpected error during sign-in:", error.message);
        return {
          success: false,
          error: "An unexpected error occurred. Please try again.",
        };
      }
    };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      if (login) {
        signInUser(values.email, values.password)
      } else (
        signUpNewUser(values.email, values.password)
      )
    },
  });

  return (
    <div className="hero bg-base-300 min-h-screen">
      <CustomName />
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">
            {login ? "Login now!" : "Hello new user!"}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        {/*  FORM  */}
        <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" onSubmit={formik.handleSubmit}>
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
                {/* INPUT EMAIL */}
                <input type="email" placeholder="mail@site.com" required
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                               />
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
                {/* INPUT PASSWORD */}
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                  placeholder="Password"
                  min="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
                {/* TOOLTIP */}
                {!login && (
                  <div className="tooltip max-sm:tooltip-left ">
                    <div className="tooltip-content">
                      <div className="font-semibold max-sm:text-xs max-sm:w-56">
                      Must be more than 8 characters, including number, lowercase letter, uppercase letter
                      </div>
                    </div>
                    <span className="badge badge-neutral badge-xs cursor-pointer">
                      i
                    </span>
                  </div>
                )}
              </label>

              {!login &&
                 <p className="validator-hint hidden">
                 Must be more than 8 characters, including
                 <br />
                 At least one number
                 <br />
                 At least one lowercase letter
                 <br />
                 At least one uppercase letter
               </p>           
              }
              {/* FORGOT PASSWORD */}
              {login && (
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
              )}
              {/* BUTTON */}
              <button type="submit" className="btn btn-neutral mt-4">
                {login ? (
                  <p>
                    {loading ? "" : "Login"}{" "}
                    {loading && <span className="loading loading-bars"></span>}
                  </p>
                ) : (
                  <p>
                    {loading ? "" : "Inscription"}{" "}
                    {loading && <span className="loading loading-bars"></span>}
                  </p>
                )}
              </button>
              {/* NEW USER or LOGIN ? */}
              <p
                className="mt-5 text-center italic hover:underline hover:cursor-pointer w-fit justify-self-center"
                onClick={() => navigate(login ? "/sign" : "/login")}
              >
                {login
                  ? "Je n'ai pas de compte ? Inscription"
                  : "J'ai un compte ? Connexion"}
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignPage;
