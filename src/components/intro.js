import programmer from "../images/programmer.jpg";

function Intro() {
    return(
        <div className="pt-[110px] lg:pt-[180px] text-center lg:text-left pl-[30px] md:pl-[50px] lg:pl-[80px]">
            <div className="text-left sm:w-[450px] inline-block align-middle xl:w-[550px] ">
                <h1 
                    className="title rainbowfont text-[50px] sm:text-[60px] xl:text-[75px] font-medium leading-[60px] lg:leading-[80px]"
                >
                    Hi. I'm Monica. A Developer.
                </h1>
                <p className="text-[20px] pt-[30px]">I'm a front-end developer with an eye for responsive, user-friendly design.</p>
            </div>
            <div className="text-left inline-block align-middle pt-[40px] lg:pt-0 md:px-[50px] xl:pl-[150px]">
                <img
                    alt="programmer"
                    src={programmer}
                    className="w-[370px] xl:w-[470px] 2xl:w-[550px]"
                />
            </div>
        </div>
    )
}

export default Intro;