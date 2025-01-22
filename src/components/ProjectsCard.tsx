

const ProjectsCard = () => {
  return (
    <div className="card">
        <h2 className="text-2xl text-center mb-10">SOME OF MY PROJECTS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-10 px-28">
            <div className="card text-center justify-between items-center">
                <h2 className="text-3xl mb-2">🩰</h2>
                <h3 className="text-2xl mb-6">DanceNet</h3>
                <p className="mb-4">As a part of my bachelor thesis, I developed a website to store dance creative processes thanks to my knowledge in the dance field. </p>
                <p className="mb-6"><span className="font-bold">Technology used:</span>  Vue.js, MongoDB, Express, Node.js</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/tfg_dancenet')}>View Code</button>
            </div>
            <div className="card text-center justify-between items-center">
                <h2 className="text-3xl mb-2">🗂️</h2>
                <h3 className="text-2xl mb-6">Personal Website</h3>
                <p className="mb-4">I created this website as a portfolio of my work and as a way for people to now me a bit better. I keep refactoring it as I learn new technologies.</p>
                <p className="mb-6"><span className="font-bold">Technology used:</span> React, Typescript, Tailwind</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/crismide.github.io')}>View Code</button>
            </div>
            <div className="card text-center justify-between items-center">
                <h2 className="text-3xl mb-2">📊</h2>
                <h3 className="text-2xl mb-6">Interactive systems</h3>
                <p className="mb-6">These are some examples of what I did in Python in the Interactive Systems course in Uppsala University, easily my favorite course there!</p>
                <p className="mb-6"><span className="font-bold">Technology used:</span> Python, Pandas and NumPy library, Furhat</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/LAB_Interactive')}>View Code</button>
            </div>
            <div className="card text-center justify-between items-center">
                <h2 className="text-3xl mb-2">🦾</h2>
                <h3 className="text-2xl mb-6">Microcontroller</h3>
                <p className="mb-6">For this project that I did in my Master's I used a custom microcontroller and then I strarted implementing functions coding with C</p>
                <p className="mb-6"><span className="font-bold">Technology used:</span> C, STM32CubeMX graphical tool</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/PROYECTO_SEU')}>View Code</button>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectsCard