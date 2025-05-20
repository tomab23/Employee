import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProfileInfo from "../components/profile/ProfileInfo";
import Footer from "../components/layout/Footer";
import { supabase } from "../SupabaseClient";

const ProfilPage = () => {
  const [user, setUser] = useState();

    useEffect(() => {
      getUserbyId()
  }, []);
  

  async function getUserbyId() {    
      const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase.from("user_info").select().eq("user_id", user.id);
          if (error) {
        console.log(error.message);
      }

    setUser(data[0]);
  }

  // console.log(user);

  
  

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-5">Votre profil - {user?.firstname} {user?.lastname}</h1>

      <br />
      <br />

      <div className="mx-10 max-sm:mx-2 max-lg:mx-5 max-xl:mx-10">
        <ProfileInfo user={user} />
      </div>

      <Footer fixed />
    </div>
  );
};

export default ProfilPage;
