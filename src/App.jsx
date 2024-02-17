import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blogs from './pages/Blog'

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Blogs' element={<Blogs />} />
              <Route path='/Projects' element={<Projects />} />
        </Routes>
      </main>
    </>
  )
}

export default App
