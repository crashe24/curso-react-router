import { useNavigate } from "react-router-dom"
import { useAuth } from "../../auth"

const LogoutPage = () => {

  const {logout} = useAuth()
  const navigate = useNavigate()
  const logoutPage = (e) => {
      e.preventDefault()
      console.log('logoutPage', logoutPage)
      logout()
      navigate('/')
  }
  return (
    <>
    <h1>Logout</h1> 
    <form onSubmit={logoutPage}>
      <label >Seguro de que deseas salir</label>
      <button type="submit">Salir</button>
    </form>
  </>
  );
}

export {LogoutPage};
