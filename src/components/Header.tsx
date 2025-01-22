const Header = () => {
  return (
    <div>
        <header className="pt-[61px]">
            <h1 className="text-3xl text-center">.•*•.•*•. JUST CALL ME MILEGO .•*•.•*•.</h1>
        </header>
        <nav className="mt-10 mb-10 flex justify-center items-center lg:flex md:block sm:block flex-wrap">
            <button className="link-button ml-5 mr-5" onClick={() => open('https://www.linkedin.com/in/cris-milego-de-diego-30629b153/')}>LinkedIn</button>
            <button className="link-button ml-5 mr-5" onClick={() => open('https://github.com/crismide')}>Github</button>
        </nav>
    </div>
  )
}

export default Header