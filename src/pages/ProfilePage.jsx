import Navbar from "../components/layout/Navbar";
import ProfileInfo from "../components/profile/ProfileInfo";
import Footer from "../components/layout/Footer";
import { useAuth } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { userMetadata, loading, isAuthenticated } = useAuth();
  

    if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-2xl"></span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div>Vous devez être connecté pour accéder à cette page</div>
      </div>
    );
  }
  
  

  return (
        <div>
      <Navbar back log />
      <h1 className="text-4xl font-bold text-center mt-5">
        Votre profil - {userMetadata?.first_name} {userMetadata?.last_name}
      </h1>

      <div className="mx-2 sm:mx-5 lg:mx-10 xl:mx-10 mt-8">
        <ProfileInfo user={userMetadata} />
      </div>

      <Footer fixed />
    </div>
  );
};

export default ProfilePage;
