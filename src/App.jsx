import { HashRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, AuthRoute } from './auth'
import { MenuComponent } from './components/MenuComponent'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BlogPost } from './components/BlogPost'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'

import './App.css'


/// /#/
/// /#/blog
/// /#/blogddd not found
/// /dddd interpreta como la ruta principal

function App() {
  

  return (
    <>
     <HashRouter>
      <AuthProvider>
        <MenuComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} >
            <Route path=':slug' element={<BlogPost />} />
          </Route> 
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' 
          element={
            <AuthRoute>
              <LogoutPage />
            </AuthRoute>
          } />
          <Route path='/profile' 
            element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
            } />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
        
     </HashRouter>
    </>
  )
}

export default App
