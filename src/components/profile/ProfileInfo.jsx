import { useNavigate } from "react-router-dom";

const ProfileInfo = ({ user }) => {

  const navigate = useNavigate();

  return (
    <div className="card card-border bg-base-300 w-full">
      <div className="card-body">
        <h2 className="card-title">user ID : {user?.id} </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
                <p>
          Location : {user?.location}
        </p>
        <button className="btn btn-outline btn-primary btn-sm w-fit self-end" onClick={() => navigate(`/user-form/${user?.id}`)}>Modifier</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
