import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomName = () => {

    const navigate = useNavigate();

  return (
    <div className='fixed top-5'>
        <h1 className='link link-hover text-4xl uppercase font-bold' onClick={() => navigate('/')}>Employee</h1>
    </div>
  )
}

export default CustomName