import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeaderSign = () => {
    const navigate = useNavigate();

  return (
    <div className='fixed hover:scale-105 top-5 left-5 items-center flex cursor-pointer'>
        <ChevronLeft className='w-10 h-10 '/>
        <h1 className='link link-hover text-3xl uppercase font-bold' onClick={() => navigate('/')}>Employee</h1>
    </div>
  )
}

export default HeaderSign