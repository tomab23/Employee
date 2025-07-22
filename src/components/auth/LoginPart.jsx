import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { KeyRound, Mail, Eye, EyeOff } from "lucide-react";

const LoginPart = () => {
  const { isAuthenticated, signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

//     useEffect(() => {
//     if (!loading && isAuthenticated) {
//       navigate("/home");
//     }
//   }, [isAuthenticated, loading, navigate]);

  // LOGIN
  const signInUser = async (email, password) => {
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      console.log(error);
    } else {
      // La redirection se fera automatiquement via useEffect
      console.log("Connexion réussie!");
    }

    setLoading(false);
  };

  const ValidSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Adresse email obligatoire"),
    password: Yup.string()
      .min(8, "Votre password est trop court")
      .required("Le message est obligatoire"),
  });



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      signInUser(values.email, values.password);
    },
  });

  return (
    <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl text-center font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
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
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
                placeholder="Password"
                min="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              {/* EYE VISIBILITY PASSWORD */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-primary transition-colors cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </label>

            {/* FORGOT PASSWORD */}
            <div>
              <a href="/password" className="link link-hover">Forgot password?</a>
            </div>
            {/* BUTTON */}
            <button type="submit" className="btn btn-neutral mt-4">
              <p>
                {loading ? "" : "Login"}{" "}
                {loading && <span className="loading loading-bars"></span>}
              </p>
            </button>
            {/* NEW USER or LOGIN ? */}
            <p
              className="mt-5 text-center italic hover:underline hover:cursor-pointer w-fit justify-self-center"
              onClick={() => navigate("/sign")}
            >
              Je n'ai pas de compte ? Inscription
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default LoginPart;
