import { useState } from "react"

const BioCard = () => {
  const [isBioVisible, setIsBioVisible] = useState<boolean>(true)
  return (
    <div className="card">
        <div className="mb-8">
            <button onClick={() => setIsBioVisible(true)} className={`text-2xl mr-6 delay-75 ${isBioVisible?"text-black":"text-gray-400"}`} >Bio</button>
            <button onClick={() => setIsBioVisible(false)} className={`text-2xl mr-6 delay-75 ${!isBioVisible?"text-black":"text-gray-400"}`}>Hobbies</button>
        </div>
        {isBioVisible ? (
          <div className="flex flex-row">
          <img src="src/assets/IMG-20240503-WA0016(1).jpg" className="rounded-full w-[180px] h-[180px] mr-8" alt="a photo of me smiling with a sakura tree on the background"  />
          <p className="text-justify">Hello World! I'm a computer engineer with a passion for continuous learning. My interest in computers began as a child when I started playing video games. I was so fascinated by how everything worked that I decided to explore it further! I completed my Bachelor's and Master's degrees at the Polytechnic University of Valencia, and during my second year of my Master's, I had the opportunity to study abroad at Uppsala University. My technical expertise and creativity fuels my curiosity and openness to trying new things!</p>
      </div>
        ) : (
          <div className="flex flex-row text-center">
            <div className="w-auto ml-2 mr-2">
              <h2 className="text-4xl mb-2">🧗🏼</h2>
              <h2 className="text-xl mb-2 font-semibold">Bouldering</h2>
              <p className="">I'm still a beginner but I don't miss a week of bouldering with my friends.</p>
            </div>
            <div className="w-auto ml-2 mr-2">
              <h2 className="text-4xl mb-2">📚</h2>
              <h2 className="text-xl mb-2 font-semibold">Reading</h2>
              <p className="">I enjoy reading non-fiction and fantasy even though I try to read a bit of everything.</p>
            </div>
            <div className="w-auto ml-2 mr-2">
              <h2 className="text-4xl mb-2">🧶</h2>
              <h2 className="text-xl mb-2 font-semibold">Doing crochet</h2>
              <p className="">My last project was a cardigan made of squares, my biggest project so far.</p>
            </div>
            <div className="w-auto ml-2 mr-2">
              <h2 className="text-4xl mb-2">🎞️</h2>
              <h2 className="text-xl mb-2 font-semibold">Watching movies</h2>
              <p className="">I like slow drama movies but I enjoy watching Marvel movies with my friends!</p>
            </div>
            
            </div>
        )}
    </div>
  )
}

export default BioCard