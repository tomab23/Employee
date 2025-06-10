import { useNavigate } from "react-router-dom";
import ep1 from '../../assets/imgs/ep1.jpg'
import BadgeCloseEntreprise from "./BadgeCloseEntreprise";


const EntrepriseCard = ({ entreprise }) => {

    const navigate = useNavigate();

  return (
    // card bg-base-100 image-full w-60 h-[12rem] xl:w-80 xl:h-[15rem] shadow-sm
    <div className="card bg-base-100 image-full w-80 xl:w-96 shadow-sm">
  <figure>
    <img
    loading="lazy"
      src={ep1}
      alt="entreprise image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{entreprise.name}
      {entreprise.close && <BadgeCloseEntreprise />}
    </h2>
    <p>{entreprise.resume}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => navigate(`/entreprise/${entreprise.id}`)}>See more</button>
    </div>
  </div>
</div>
  )
}

export default EntrepriseCard