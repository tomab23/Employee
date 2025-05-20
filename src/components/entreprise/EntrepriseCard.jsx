import { useNavigate } from "react-router-dom";
import ep1 from '../../assets/imgs/ep1.jpg'


const EntrepriseCard = ({ entreprise }) => {

    const navigate = useNavigate();

  return (
    <div className="card bg-base-100 image-full w-80 xl:w-96 shadow-sm">
  <figure>
    <img
      src={ep1}
      alt="entreprise image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{entreprise.name}</h2>
    <p>{entreprise.resume}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => navigate(`/entreprise/${entreprise.id}`)}>See more</button>
    </div>
  </div>
</div>
  )
}

export default EntrepriseCard