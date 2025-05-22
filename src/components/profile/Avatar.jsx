
const Avatar = () => {


        const avatarName = "email";
    const avatarForm = "shapes";

    // USE ZUSTAND ?

    // const [user, setUser] = useState();
    // const avatarName = user ? user.firstname + user.lastname : "email";
    // const avatarForm = user ? user.avatar : "shapes";

    //   useEffect(() => {
    //     getUserbyId()
    // }, []);
    
  
    // async function getUserbyId() {    
    //     const { data: { user } } = await supabase.auth.getUser()
    //   const { data, error } = await supabase.from("user_info").select().eq("user_id", user.id);
    //         if (error) {
    //       console.log(error.message);
    //     }
  
    //   setUser(data[0]);
    // }

  return (
    <img
      src={`https://api.dicebear.com/9.x/${avatarForm}/svg?seed=${avatarName}`}
      alt="avatar"
    />
  );
};

export default Avatar;
