import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import MeetTeam from "./MeetTeam";
import ServiceSection from "./serviceSection";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <MeetTeam />
        </div>
    );
};

export default Home;