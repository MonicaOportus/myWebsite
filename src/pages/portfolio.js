import React from "react";
import Projects from "../components/projects";
import projectsInfo from "../components/projectsInfo";
import Navbar from "../components/navbar";
import Message from "../components/message";
import Footer from "../components/footer";

function Portfolio() {
    return(
        <div className="">
            <Navbar/>
            <h1 className="rainbowfont title text-[60px] pt-[80px] w-[300px] mx-auto">Portfolio.</h1>
            <div>
                {projectsInfo.map(Projects)}
            </div>
            <Message/>
            <Footer/>
        </div>
    );
}

export default Portfolio;