import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProfileInfo from "../components/profile/ProfileInfo";
import Footer from "../components/layout/Footer";
import { supabase } from "../SupabaseClient";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserbyId();
  }, []);

  async function getUserbyId() {
    // setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user.user_metadata);
    setLoading(false);
  }

  console.log();

  // if (loading) {
  //   return <div className="h-[100vh] flex justify-center items-center"><span className="loading loading-spinner loading-2xl"></span></div>
  // }

  return (
    <div>
      <Navbar back log />
      <h1 className="text-4xl font-bold text-center mt-5">
        Votre profil -{" "}
        {loading ? (
          <span className=" loading loading-infinity loading-md"></span>
        ) : (
          <span>
            {user?.first_name} {user?.last_name}
          </span>
        )}
      </h1>

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
