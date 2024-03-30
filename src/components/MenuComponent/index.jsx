import {  NavLink } from "react-router-dom";
import { useAuth } from "../../auth";


const routes = [
  {to:'/', text: 'Home', private:false},
  {to:'/blog', text: 'Blog', private:false},
  {to:'/profile', text: 'Profile', private:true},
  {to:'/login', text: 'Login', private:false, publicOnly:true},
  {to:'/logout', text: 'Logout', private:true},
]
const MenuComponent = () => {

  const auth = useAuth()
  
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/profile'}>Profile</Link>
        </li>
        */}
        {/* <li>
          <NavLink 
        //   className={({isActive})=>''}
           style={({isActive})=>({color: isActive ? 'red': 'blue'})} 
           to={'/'}>Home</NavLink>
        </li> 
        <li>
          <NavLink 
        //   className={({isActive})=>''}
           style={({isActive})=>({color: isActive ? 'red': 'blue'})} 
           to={'/blog'}>Blog</NavLink>
        </li>
        <li>
          <NavLink 
        //   className={({isActive})=>''}
           style={({isActive})=>({color: isActive ? 'red': 'blue'})}
           to={'/profile'}>Profile</NavLink>
        </li> */}

        {
          routes.map( route => {
            if (route.publicOnly && auth.user) return null
            if (route.private && !auth.user) return null
            return (
              <li key={route.text}>
                <NavLink 
                   style={({isActive})=>({color: isActive ? 'red': 'blue'})}
                   to={route.to}>{route.text}</NavLink>
            
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}

export {MenuComponent};
