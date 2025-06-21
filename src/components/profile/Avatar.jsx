import { useAuth } from "../../contexts/AuthContext";

const Avatar = () => {
  const { userMetadata, isAuthenticated } = useAuth();

  const avatarForm = "shapes";
  const avatarName = "email";

  if (!isAuthenticated) {
    return (
      <img
        src={`https://api.dicebear.com/9.x/${avatarForm}/svg?seed=${avatarName}`}
        alt="avatar"
      />
    );
  }

  console.log(userMetadata.avatar);

  return (
    <img
      src={`https://api.dicebear.com/9.x/${userMetadata?.avatar}/svg?seed=${userMetadata?.email}`}
      alt="avatar"
    />
  );
};

export default Avatar;
