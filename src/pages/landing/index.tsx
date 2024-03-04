import Header from "../../components/header";
import Banner from "./banner";
// import Service from "./service";
import About from "./about";
import Team from "./team";
import Tokenomics from "./tokenomics";
import Roadmap from "./roadmap";
import Partners from "./partners";
// import Investors from "./investors";
import Faq from "./faq";
import Release from "./release";
import Footer from "./footer";
import Bottom from "./bottom";
import RoadMapMobile from './mobileView/roadmap/index'
import TokenomicsMob from './mobileView/tokenomics/index'
import BannerNav from "./mobileView/banner";
import ourTeam from '../../assets/images/Our-Team.svg' 

function Landing() {
  return (
    <div className="bg-main min-h-screen w-full relative ">
      <main className="flex-1">
        <Header />
        <BannerNav />
        <Banner />
        {/* <Service /> */}
        <About />
        <br />
        <br />
        <div id="Heading-Team" className="flex justify-center" data-aos="fade-down">
      <div id="team-head" className="absolute top-[17rem]">
          <img src={ourTeam} />
          </div>  
          </div>
        <Team />
        <TokenomicsMob />
        <Tokenomics />
        <RoadMapMobile />
        <Roadmap />
        <Partners />
        <Faq />
        <Release />
        {/* <TeamMob /> */}
        <Footer />
        <Bottom />
      </main>
    </div>
  );
};

export default Landing;