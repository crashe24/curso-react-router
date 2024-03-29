import {  NavLink } from "react-router-dom";


const routes = [
  {to:'/', text: 'Home'},
  {to:'/blog', text: 'Blog'},
  {to:'/profile', text: 'Profile'},
]
const MenuComponent = () => {
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
          routes.map( route => (
            <li key={route.text}>
              <NavLink 
                 style={({isActive})=>({color: isActive ? 'red': 'blue'})}
                 to={route.to}>{route.text}</NavLink>

            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export {MenuComponent};
