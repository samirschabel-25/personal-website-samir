import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CurriculumVitae from './pages/CV/CurriculumVitae'
import Projects from './pages/Projects/Projects';

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cv' element={<CurriculumVitae/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>
    </>
  )
}

export default App
