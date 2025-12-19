import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CurriculumVitae from './pages/CV/CurriculumVitae'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cv' element={<CurriculumVitae/>}/>
     </Routes>
    </>
  )
}

export default App
