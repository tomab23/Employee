import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProfileInfo from "../components/profile/ProfileInfo";
import Footer from "../components/layout/Footer";
import { supabase } from "../SupabaseClient";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      getUserbyId()
  }, []);
  

  async function getUserbyId() {  
    // setLoading(true);
      const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase.from("user_info").select().eq("user_id", user.id);
          if (error) {
        console.log(error.message);
      }

    setUser(data[0]);
    setLoading(false);
  }

  // console.log(user);

  // if (loading) {
  //   return <div className="h-[100vh] flex justify-center items-center"><span className="loading loading-spinner loading-2xl"></span></div>
  // }

  
  

  return (
    <div>
      <Navbar back log />
      <h1 className="text-4xl font-bold text-center mt-5">Votre profil - {user?.firstname} {user?.lastname}</h1>
      {loading && <div className="flex justify-center"><span className=" loading loading-infinity loading-md"></span></div>  }

      <br />
      <br />

      <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10">
        <ProfileInfo user={user} />
      </div>

      <Footer fixed />
    </div>
  );
};

export default ProfilePage;
