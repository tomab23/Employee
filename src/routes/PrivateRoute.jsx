import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";

const PrivateRoute = ({ children }) => {
    const [session, setSession] = useState(undefined)
  
    
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
    }, []);

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  return <div>{session ? <>{children}</> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;