import { Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}

export default App
