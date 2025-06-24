import { useState } from "react";
import { ChevronLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {

    const [ loading, setLoading ] = useState()
    const navigate = useNavigate();

  return (
        <div className="hero bg-base-300 min-h-screen">
    <div className='fixed hover:scale-105 top-5 left-5 items-center flex cursor-pointer'>
        <ChevronLeft className='w-10 h-10 '/>
        <h1 className='link link-hover text-3xl  font-bold' onClick={() => navigate(-1)}>Back</h1>
    </div>
       <div className="hero-content flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl text-center font-bold">Forgot password!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      {/*  FORM  */}
      <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              // onChange={formik.handleChange}
              // value={formik.values.email}
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          {/* BUTTON */}
          <button type="submit" disabled className="btn btn-neutral mt-4">
            <p>
              {loading ? "" : "button"}{" "}
              {loading && <span className="loading loading-bars"></span>}
            </p>
          </button>
        </fieldset>
      </div>
      </form>
    </div>

    </div>
   
  );
};

export default ForgotPasswordPage;
