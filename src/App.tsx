import Footer from "./components/Footer"
import Header from "./components/Header"
import BioCard from "./components/BioCard"
import ProjectsCard from "./components/ProjectsCard"

function App() {
  return (
    <div className="font-mono px-[180px]">
      <Header/>
      <BioCard/>
      <ProjectsCard/>
      <Footer/>
    </div>
  )
}

export default App
