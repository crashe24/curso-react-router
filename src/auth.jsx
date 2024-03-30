import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext()

// autorizacion 
const listAdmin = ['jorgeLeon', 'gaelLeon', 'martinLeon']


const AuthProvider = ({children}) =>  {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    
    const login = ({username}) =>{
        const isAdmin = listAdmin.find(admin => admin === username)
        setUser({username, isAdmin})
        navigate('/profile')
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