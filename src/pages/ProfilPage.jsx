import React from 'react'
import Navbar from '../components/layout/Navbar'
import ProfileInfo from '../components/profile/ProfileInfo'
import Footer from '../components/layout/Footer'

const ProfilPage = () => {
  return (
    <div>
        <Navbar />
        <h1 className='text-4xl font-bold text-center mt-5'>Votre profil</h1>

        <br /><br />

        <div className='mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10'>
            <ProfileInfo />
        </div>

        <Footer fixed />
    </div>
  )
}

export default ProfilPage