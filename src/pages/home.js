import Footer from "../components/footer";
import Intro from "../components/intro";
import Navbar from "../components/navbar";
import SkillTitle from "../components/skillsTitle";
import Skills from "../components/skills";
import skillsInfo from "../components/skillsInfo";
import Message from "../components/message";

function Home() {
    return(
        <div className="">
            <Navbar/>
            <Intro/>
            <SkillTitle/>
            <div className="text-center">
                {skillsInfo.map(Skills)}
            </div>
            <Footer/>
            <Message/>
        </div>
    )
}

export default Home;