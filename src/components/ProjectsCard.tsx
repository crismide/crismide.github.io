

const ProjectsCard = () => {
  return (
    <div className="card">
        <h1 className="md:mb-10 mb-2 ">SOME OF MY PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 md:gap-10 sm:px-3">
            <div className="mx-4 md:mx-0 card text-center justify-between items-center">
                <h2 className="emoji-title mb-2">🩰</h2>
                <h2 className="written-title mb-3 md:mb-5">DanceNet</h2>
                <p className="mb-3 md:mb-5 md:mb-5">As a part of my bachelor thesis, I developed a website to store dance creative processes thanks to my knowledge in the dance field. </p>
                <p className="mb-3 md:mb-5"><span className="font-bold">Technology used:</span>  Vue.js, MongoDB, Express, Node.js</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/tfg_dancenet')}>View Code</button>
            </div>
            <div className="mx-4 md:mx-0 card text-center justify-between items-center">
                <h2 className="emoji-title mb-2">🗂️</h2>
                <h2 className="written-title mb-3 md:mb-5">Personal Website</h2>
                <p className="mb-3 md:mb-5">I created this website as a portfolio of my work and as a way for people to now me a bit better. I keep refactoring it as I learn new technologies.</p>
                <p className="mb-3 md:mb-5"><span className="font-bold">Technology used:</span> React, Typescript, Tailwind</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/crismide.github.io')}>View Code</button>
            </div>
            <div className="mx-4 md:mx-0 card text-center justify-between items-center">
                <h2 className="emoji-title mb-2">📊</h2>
                <h2 className="written-title mb-3 md:mb-5">Interactive systems</h2>
                <p className="mb-3 md:mb-5">These are some examples of what I did in Python in the Interactive Systems course in Uppsala University, easily my favorite course there!</p>
                <p className="mb-3 md:mb-5"><span className="font-bold">Technology used:</span> Python, Pandas and NumPy library, Furhat</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/LAB_Interactive')}>View Code</button>
            </div>
            <div className="mx-4 md:mx-0 card text-center justify-between items-center">
                <h2 className="emoji-title mb-2">🦾</h2>
                <h2 className="written-title mb-3 md:mb-5">Microcontroller</h2>
                <p className="mb-3 md:mb-5">For this project that I did in my Master's I used a custom microcontroller and then I strarted implementing functions coding with C</p>
                <p className="mb-3 md:mb-5"><span className="font-bold">Technology used:</span> C, STM32CubeMX graphical tool</p>
                <button className="link-button" onClick={() => open('https://github.com/crismide/PROYECTO_SEU')}>View Code</button>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectsCard