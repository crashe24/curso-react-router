import { useState } from "react";
import { useAuth } from "../../auth";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const {user, login } = useAuth()


  if (user) {
    return <Navigate to={'/profile'} />
  }

  const loginPage = (e) => {
    e.preventDefault()
    login({username})
    navigate('/profile')
  }


  return (
    <>
      <h1>Login</h1> 
      <form onSubmit={loginPage}>
        <label >Escribe tu nombre</label>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export {LoginPage};
