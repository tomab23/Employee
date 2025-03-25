import React from 'react'
import Footer from '../components/layout/Footer'
import EntrepriseInfo from '../components/entreprise/EntrepriseInfo'
import Navbar from '../components/layout/Navbar'
import EmployeePart from '../components/employee/EmployeePart'

const EntreprisePage = () => {
  return (
    <div>
    <Navbar log={true} />
    <h1 className="text-center text-3xl uppercase my-5">Nom de l'entreprise</h1>

    <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10">
        <EntrepriseInfo />
    </div>

    <EmployeePart loading={false} />

    <Footer fixed={true} />
</div>
  )
}

export default EntreprisePage