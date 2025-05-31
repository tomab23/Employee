// import { useEffect, useState } from "react";
// import { supabase } from "../../SupabaseClient";

const Avatar = () => {

    // const [user, setUser] = useState();
    // const [loading, setLoading] = useState(false);

    const avatarName = "email";
    const avatarForm = "shapes";

    // USE ZUSTAND ?

      // useEffect(() => {
      //   getUserbyId();
      // }, []);

      // async function getUserbyId() {
      //   setLoading(true);
      //   const {
      //     data: { user },
      //   } = await supabase.auth.getUser();
      //   setUser(user.user_metadata);
      //   setLoading(false);
      // }

      // if (loading) {
      //   return <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      // }

      


  return (
    //     <img
    //   src={`https://api.dicebear.com/9.x/${user?.avatar }/svg?seed=${user ? user.email : "email"}`}
    //   alt="avatar"
    // />
    <img
      src={`https://api.dicebear.com/9.x/${avatarForm}/svg?seed=${avatarName}`}
      alt="avatar"
    />
  );
};

export default Avatar;
