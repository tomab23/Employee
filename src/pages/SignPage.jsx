import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import HeaderSign from "../components/layout/HeaderSign";
import LoginPart from "../components/auth/LoginPart";
import RegisterPart from "../components/auth/RegisterPart";

const SignPage = ({ login }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

      useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);


  return (
    <div className="hero bg-base-300 min-h-screen">
      <HeaderSign />

      {login ? <LoginPart /> : <RegisterPart />}

    </div>
  );
};

export default SignPage;