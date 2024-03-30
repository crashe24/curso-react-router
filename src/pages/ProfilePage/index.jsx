import { AuthRoute, useAuth } from "../../auth";

const ProfilePage = () => {
    
  const {user} = useAuth()

    // if(!user) {
    //    return  <Navigate to={'/login'} />
    // }

    return (
      <>
          <h2>Profile of {user?.username}</h2>

      </>
    );
  }
  
  export { ProfilePage };