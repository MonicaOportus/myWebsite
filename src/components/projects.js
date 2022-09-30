import React from "react";

function Projects(props) {
    return(
        <div 
            id="projects"
            className="bg-[#212121] mt-[30px] mb-[50px] mx-[20px] px-[20px] pb-[20px] 
            md:mx-[40px] md:px-[40px] md:pb-[40px] xl:mx-[110px]"
            data-aos="fade-right"
            data-aos-anchor="#projects"
            data-aos-anchor-placement= "center-center"
            data-aos-duration="2000"
            data-aos-delay= "500"  
        >
            <div className="flex justify-end items-center pt-[10px]">
                <a 
                    href={props.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[30px]"
                >
                    <i className="fa-brands fa-github opacity-[85%] hover:opacity-[100%]"></i>
                </a>
            </div>
            <h2 className="rainbowfont title text-[40px] w-[375px]">
                    {props.title}.
                </h2>
            <p
                className="text-[19px] py-[8px]"
            >
                 {props.description} 
            </p>
            <a 
                href={props.url}
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    src={props.img}
                    alt="project"
                    className="project pt-[15px] lg:pt-[30px]"
                />
            </a>
        </div>
    );
}

export default Projects;