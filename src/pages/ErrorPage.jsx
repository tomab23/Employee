import { useNavigate } from 'react-router-dom'
import error from '../assets/imgs/404.svg'
import { ArrowBigLeft, House } from 'lucide-react';

const ErrorPage = () => {

  const navigate = useNavigate();
  // const { i18n } = useTranslation();

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
      <img src={error} alt="illustrations by Storyset" title='illustrations by Storyset' className='h-[35rem]' />
      
      <div className='flex gap-5'>
        <button onClick={() => navigate(-1)} className="btn btn-soft btn-primary"><ArrowBigLeft />Retour en arriere</button>
        <button onClick={() => navigate("/home")} className="btn btn-soft btn-primary"><House />Home</button>
      </div>
      </div>
    </div>
  )
}

export default ErrorPage