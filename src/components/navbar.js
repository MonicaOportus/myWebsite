
function Navbar() {
    return(
        <div className="bg-black w-[100%] fixed z-50 flex justify-between py-[25px] pl-[30px] md:pl-[50px] lg:pl-[80px] pr-[30px] md:pr-[50px] lg:pr-[80px]">
            <div className="flex gap-8 text-[18px] md:gap-12 xl:gap-16">
                <a href="/portfolio" className="navbarItem">Portfolio</a>
                <a href="/contact" className="navbarItem">Contact</a>
                <a href="/resume" className="navbarItem">Resume</a>
            </div>
            <div className="flex gap-8  pt-[15px] md:gap-12 xl:gap-16">
                <i className="fa-xl fa-brands fa-linkedin opacity-[85%] hover:opacity-[100%]"></i>
                <i className="fa-xl fa-brands fa-github opacity-[85%] hover:opacity-[100%]"></i>
            </div>
        </div>
    )
}

export default Navbar;