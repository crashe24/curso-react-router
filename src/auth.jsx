import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';

const AuthContext = React.createContext()


const AuthProvider = ({children}) =>  {
    const [user, setUser] = useState(null);
    
    const login = ({username}) =>{
        setUser({username})
    }
    const logout = () =>{
        setUser(null)
    }

    const auth = {user, login, logout}
    
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return  useContext(AuthContext)

}
const AuthRoute = (props) => {
    const auth = useAuth()
    if (!auth.user) {
        return <Navigate to={'/login'} />
    }
    return props.children
}
export {AuthProvider, AuthRoute, useAuth}