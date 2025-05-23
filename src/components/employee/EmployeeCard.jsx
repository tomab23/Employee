import { CircleUserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployeeCard = () => {

  const navigate = useNavigate();
  return (
    <div className="card card-sm bg-base-300 w-48 shadow-sm">
    <figure className="px-6 pt-6">
      <CircleUserRound size={60}/>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">firsname lasname</h2>
      <p>info</p>
      <div className="card-actions mt-2">
        <button className="btn btn-primary" onClick={() => navigate('/employee')}>Modifier</button>
      </div>
    </div>
  </div>
  )
}

export default EmployeeCard