import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import ErrorPage from './pages/ErrorPage';
import EntreprisePage from './pages/EntreprisePage';
import './i18n/i18n'
import ContactPage from './pages/ContactPage';
import SignPage from './pages/SignPage';
import PrivateRoute from './routes/PrivateRoute';
import ProfilPage from './pages/ProfilPage';
import RouterTest from './routes/Router';
import Router from './routes/Router';
// import { supabase } from './SupabaseClient';

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //   <Route path="/login" element={<SignPage login />} />
    //   <Route path="/sign" element={<SignPage />} />
    //   <Route path="/contact" element={<ContactPage />} />
    //   <Route path="/*" element={<ErrorPage />} />
    //   {/* PRIVATE */}
    //   <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    //   <Route path="/entreprise" element={<PrivateRoute><EntreprisePage /></PrivateRoute>} />
    //   <Route path="/profile" element={<PrivateRoute><ProfilPage /></PrivateRoute>} />
    // </Routes>
    <Router />
  )
}

export default App
