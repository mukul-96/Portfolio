
import './App.css'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Overview from './components/Overview.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function App() {


  return (
    <div className='relative h-[100vh] w-screen overflow-x-hidden'  >
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Overview></Overview>
      <Skills></Skills>
      <Projects></Projects>
      
    </div>
  )
}

export default App
