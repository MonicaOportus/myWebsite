import CV from "../images/CV.pdf";

function Navbar() {
    return(
        <div className="bg-black w-[100%] fixed z-10 flex justify-between py-[25px] pl-[30px] md:pl-[50px] lg:pl-[80px] pr-[30px] md:pr-[50px] lg:pr-[80px]">
            <div className="flex gap-4 sm:gap-8 text-[18px] md:gap-12 xl:gap-16">
                <a href="/" className="navbarItem">Home</a>
                <a href="/portfolio" className="navbarItem">Portfolio</a>
                <a href="/contact" className="navbarItem">Contact</a>
                <a 
                    href={CV} 
                    download="Monica CV"
                    className="navbarItem"
                >
                    CV
                </a>
            </div>
            <div className="flex gap-4 sm:gap-8 md:gap-12 xl:gap-16">
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/monica-oportus-01556b23a/"
                >
                    <i className="fa-xl fa-brands fa-linkedin opacity-[85%] hover:opacity-[100%]"></i>
                </a>
                <a 
                    href="https://github.com/MonicaOportus"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-xl fa-brands fa-github opacity-[85%] hover:opacity-[100%]"></i>
                </a>
            </div>
        </div>
    )
}

export default Navbar;