const Header = () => {
  return (
    <div>
        <header className="md:pt-[61px] pt-12">
            <h1><span className="hidden md:inline">.•*•.•*•.</span> JUST CALL ME MILEGO <span className="hidden md:inline">.•*•.•*•.</span></h1>
        </header>
        <nav className="md:mt-10 mt-5 mb-5 md:mb-10 flex justify-center items-center flex-row wrap">
            <button className="link-button md:mx-10 mb-2" onClick={() => open('https://www.linkedin.com/in/cris-milego-de-diego-30629b153/')}>LinkedIn</button>
            <button className="link-button mx-3 md:mx-4 mb-2" onClick={() => open('https://github.com/crismide')}>Github</button>
            <button className="link-button md:mx-10 mb-2" onClick={() => open('https://leetcode.com/u/fSb8KOUoVF/')}>LeetCode</button>
        </nav>
    </div>
  )
}

export default Header