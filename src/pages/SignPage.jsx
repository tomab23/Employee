import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomName from "../components/custom/CustomName";
import * as Yup from "yup";
import { useFormik } from "formik";
import { KeyRound, Mail, MapPin, UserPen } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../SupabaseClient";

const SignPage = ({ login }) => {
  const { isAuthenticated, signIn, signUp } = useAuth();
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

    useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, loading, navigate]);

  // REGISTER
  // const signUpNewUser = async (email, password, firstname, lastname, location) => {
  //   setLoading(true);

  //   const { error, data } = await signUp(email, password, firstname, lastname, location);
    

  //   if (error) {
  //     setLoading(false);
  //     console.error("Error signing up: ", error);
  //     return { success: false, error };
  //   }

  //   setLoading(false);
        
  //   return { success: true, data };
  // };



  // LOGIN
  const signInUser = async (email, password) => {
    setLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      console.log(error);
    } else {
      // La redirection se fera automatiquement via useEffect
      console.log('Connexion réussie!');
    }
    
    setLoading(false);
  };

//  TEST REGISTER
    const signUpNewUser = async (email, password, first, last, loc) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: first,
          last_name: last,
          location: loc,
          avatar: "shapes"
        }
      }
    });

    if (error) {
      setLoading(false);
      console.error("Error signing up: ", error);
      return { success: false, error };
    }

    setLoading(false);
    navigate("/home");
        
    return { success: true, data };
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      // confirmPassword: "",
      lastname: "",
      location: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      if (login) {
        signInUser(values.email, values.password);
      } else
        signUpNewUser(
          values.email,
          values.password,
          values.firstname,
          values.lastname,
          values.location
        );
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
        <form
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          onSubmit={formik.handleSubmit}
        >
          <div className="card-body">
            <fieldset className="fieldset">
              {/* EMAIL */}
              <label className="fieldset-label">Email</label>
              <label className="input validator">
                <Mail className="w-5 stroke-2" />
                {/* INPUT EMAIL */}
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
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
                <KeyRound className="w-5 stroke-2" />
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
                        Must be more than 8 characters, including number,
                        lowercase letter, uppercase letter
                      </div>
                    </div>
                    <span className="badge badge-neutral badge-xs cursor-pointer">
                      i
                    </span>
                  </div>
                )}
              </label>

              {!login && (
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number
                  <br />
                  At least one lowercase letter
                  <br />
                  At least one uppercase letter
                </p>
              )}
              {/* NAME & LOCATION */}
              {!login && (
                <div>
                  {/* // FIRSTNAME & LASTNAME */}
                  <div className="flex gap-4 w-80">
                    <div>
                      <label className="fieldset-label mb-1">Fistrname</label>
                      <label className="input validator">
                        <UserPen className="w-5 stroke-2" />
                        {/* INPUT FIRSTNAME */}
                        <input
                          type="text"
                          placeholder="John"
                          required
                          id="firstname"
                          name="firstname"
                          onChange={formik.handleChange}
                          value={formik.values.firstname}
                        />
                      </label>
                      <div className="validator-hint hidden">
                        Enter your firstname
                      </div>
                    </div>
                    <div>
                      <label className="fieldset-label mb-1">Lastname</label>
                      <label className="input validator">
                        <UserPen className="w-5 stroke-2" />
                        {/* INPUT LASTNAME */}
                        <input
                          type="text"
                          placeholder="Doe"
                          required
                          id="lastname"
                          name="lastname"
                          onChange={formik.handleChange}
                          value={formik.values.lastname}
                        />
                      </label>
                      <div className="validator-hint hidden">
                        Enter your lastname
                      </div>
                    </div>
                  </div>
                  {/* LOCATION */}
                  <label className="fieldset-label mb-1">Location</label>
                  <label className="input validator">
                    <MapPin className="w-5 stroke-2" />
                    {/* INPUT LOCATION */}
                    <input
                      type="text"
                      placeholder="France"
                      required
                      id="location"
                      name="location"
                      onChange={formik.handleChange}
                      value={formik.values.location}
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter your location
                  </div>
                </div>
              )}
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