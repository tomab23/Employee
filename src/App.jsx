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

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignPage login />} />
      <Route path="/sign" element={<SignPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/entreprise" element={<EntreprisePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
