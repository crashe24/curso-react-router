import { HashRouter, Routes, Route } from 'react-router-dom'
import { MenuComponent } from './components/MenuComponent'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

/// /#/
/// /#/blog
/// /#/blogddd not found
/// /dddd interpreta como la ruta principal

function App() {
  

  return (
    <>
     <HashRouter>
        <MenuComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        
     </HashRouter>
    </>
  )
}

export default App
