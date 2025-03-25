import { useNavigate } from "react-router-dom";
import ep1 from '../../assets/imgs/ep1.jpg'


const EntrepriseCard = () => {

    const navigate = useNavigate();

  return (
    <div className="card bg-base-100 image-full w-80 xl:w-96 shadow-sm">
  <figure>
    <img
      src={ep1}
      alt="entreprise image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => navigate("/entreprise")}>See more</button>
    </div>
  </div>
</div>
  )
}

export default EntrepriseCard