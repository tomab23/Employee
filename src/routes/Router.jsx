import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import SignPage from '../pages/SignPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import EntreprisePage from '../pages/EntreprisePage'
import PrivateRoute from './PrivateRoute'
import ListEmployeePage from '../pages/ListEmployeePage'
import EmployeePage from '../pages/EmployeePage'
import EmployeeFormPage from '../pages/forms/EmployeeFormPage'
import UserFormPage from '../pages/forms/UserFormPage'
import EntrepriseFormPage from '../pages/forms/EntrepriseFormPage'
import ProfilePage from '../pages/ProfilePage'
import DevNotePage from '../pages/DevNotePage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

const Router = () => {

  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<SignPage login />} />
    <Route path="/sign" element={<SignPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/dev" element={<DevNotePage />} />
    <Route path="/password" element={<ForgotPasswordPage />}  />
    <Route path="/*" element={<ErrorPage />}  />
    {/* PRIVATE */}
    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    <Route path="/entreprise/:entId" element={<PrivateRoute><EntreprisePage /></PrivateRoute>} />
    <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
    <Route path="/list" element={<PrivateRoute><ListEmployeePage /></PrivateRoute>} />
    <Route path="/employee" element={<PrivateRoute><EmployeePage /></PrivateRoute>} />
    {/* form */}
    <Route path="/employee-form" element={<PrivateRoute><EmployeeFormPage /></PrivateRoute>} />
    <Route path="/entreprise-form" element={<PrivateRoute><EntrepriseFormPage /></PrivateRoute>} />
    <Route path="/user-form" element={<PrivateRoute><UserFormPage /></PrivateRoute>} />
    {/* form by id */}
    <Route path="/employee-form/:empId" element={<PrivateRoute><EmployeeFormPage /></PrivateRoute>} />
    <Route path="/entreprise-form/:entId" element={<PrivateRoute><EntrepriseFormPage /></PrivateRoute>} />
    <Route path="/user-form/:userId" element={<PrivateRoute><UserFormPage /></PrivateRoute>} />
  </Routes>
  )
}

export default Router