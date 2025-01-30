import Footer from "./components/Footer"
import Header from "./components/Header"
import BioCard from "./components/BioCard"
import ProjectsCard from "./components/ProjectsCard"

function App() {
  return (
    <div className="font-mono md:px-[180px] sm:px-5 px-0">
      <Header/>
      <BioCard/>
      <ProjectsCard/>
      <Footer/>
    </div>
  )
}

export default App
