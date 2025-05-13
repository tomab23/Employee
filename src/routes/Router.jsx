import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import SignPage from '../pages/SignPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import EntreprisePage from '../pages/EntreprisePage'
import ProfilPage from '../pages/ProfilPage'
import PrivateRoute from './PrivateRoute'
import ListEmployeePage from '../pages/ListEmployeePage'
import EmployeePage from '../pages/EmployeePage'

const Router = () => {

      // const [session, setSession] = useState(null)
  
    
    // useEffect(() => {
    //   supabase.auth.getSession().then(({ data: { session } }) => {
    //     setSession(session);
    //   });
  
    //   supabase.auth.onAuthStateChange((_event, session) => {
    //     setSession(session);
    //   });
    // }, []);

  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<SignPage login />} />
    <Route path="/sign" element={<SignPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/*" element={<ErrorPage />} />
    {/* PRIVATE */}
    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    <Route path="/entreprise" element={<PrivateRoute><EntreprisePage /></PrivateRoute>} />
    <Route path="/profile" element={<PrivateRoute><ProfilPage /></PrivateRoute>} />
    <Route path="/list" element={<PrivateRoute><ListEmployeePage /></PrivateRoute>} />
    <Route path="/employee" element={<PrivateRoute><EmployeePage /></PrivateRoute>} />
  </Routes>
  )
}

export default Router