import { useNavigate } from 'react-router-dom'
import error from '../assets/imgs/404.svg'
import { ArrowBigLeft } from 'lucide-react';

const ErrorPage = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
      <img src={error} alt="" className='h-[35rem]' />
      <button onClick={() => navigate(-1)} className="btn btn-soft btn-primary"><ArrowBigLeft />Retour en arriere</button>
      </div>
    </div>
  )
}

export default ErrorPage