import "../../../App.scss";
import Concordium from "../../../assets/logo/partners/CONCORDIUM.png";
import StartUp from "../../../assets/logo/partners/startup.png";
import Applicature from "../../../assets/logo/partners/applicature.png";
import Frame from "../../../assets/logo/partners/Frame.png";
import lostipogoal from "../../../assets/images/5.png";
import halfImage from "../../../assets/images/6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import greenBallLeft from "../../../assets/images/green-balls-left.png";
import greenBall from "../../../assets/images/green-ball.png";
import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import PartnerMob from "../mobileView/partner";
import imgBgNav from "../../../assets/mobileNav/partner/bg-partner-nav.png";
import bgPurpleNav from "../../../assets/mobileNav/partner/purple.png";
import titlePartner from "../../../assets/mobileNav/partner/Title.svg";

function Partners() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementOffsetTop = element.offsetTop;

      if (scrollY > elementOffsetTop - window.innerHeight / 2) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="partners" className="  partners-bg">
        <div className="  flex justify-start">
          {/* MOBILE VIEW */}
          <img
            id="nav-planet-mob"
            src={imgBgNav}
            className="absolute mt-[44vh]"
          />
          {/* NORMAL VIEW */}
          <img
            src={greenBallLeft}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            id="green-left-partner"
            data-aos-offset="0"
            className="absolute mt-[34vh]"
            alt="greenBall"
          />
        </div>

        <div className="  flex justify-center">
          {/* MOBILE */}
          <img
            id="nav-planet-mob"
            src={bgPurpleNav}
            className="absolute mt-[38vh] ml-[73vw]"
          />
          {/* NORMAL  */}
          <img
            src={greenBall}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            id="green-ball-partner"
            data-aos-offset="0"
            className="  absolute mt-[60vh] ml-[68vw] w-[58.57px] h-[58.24px]"
            alt="greenBall"
          />
        </div>
        <div id="main-img">
          <img
            id="img1"
            src={lostipogoal}
            alt="lotipo"
            className="  absolute left-[10%] mt-[200px]  w-[110.191px] h-[109.602px]  transform-[rotate-[-20.863deg]]"
          />
          <img
            id="img2"
            src={lostipogoal}
            alt="lotipo"
            className="  absolute  left-[77%] mt-[430px] w-[191.671px] h-[190.646px]"
          />
          <div className="  flex items-start justify-start">
            <img
              id="img3"
              src={lostipogoal}
              alt="lotipo"
              className="  absolute w-[316.606px] h-[314.913px] mt-[53%] left-[-2%]"
            />
          </div>
          <div className="  flex justify-end relative top-[1140px]">
            <img
              id="img4"
              src={halfImage}
              alt="lotipo"
              className="  absolute  h-[194.641px]"
            />
            <img
              id="img5"
              src={greenBall}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className="  absolute right-[5vw] w-[105.69px] bottom-[0.5vh]"
              alt="greenBall"
            />
          </div>
        </div>
        <div className="  container mx-auto">
          <div
            id="partners-main"
            className="  flex flex-col items-center gap-12 py-40 px-8 h-full"
          >
            {/* MOBILE */}
            <div
              id="partner-heading-nav"
              className=" w-[100%] flex flex-item justify-center"
            >
              <img src={titlePartner} width="60%" />
            </div>
            {/* NORMAL */}
            <div
              id="partner-heading"
              className="  text-white text-3xl font-semibold"
              data-aos="fade-down"
            >
              Partners
            </div>
            {/* MOBILE */}
            <div className="flex">
              <PartnerMob />
            </div>
            {/* NORMAL */}
            <div
              id="main-partner"
              className="  flex gap-x-[200px] items-center justify-center"
              data-aos="fade-left"
            >
              <div className=" flex flex-col w-full mx-auto h-full items-center justify-center">
                <a
                  href="https://www.concordium.com/"
                  className="  justify-center text-white partners-card md:mb-[40px] sm:mb-2 md:text-[32px] sm:tex-sm mb-5"
                >
                  BlockChain
                </a>
                <div className="  image-container">
                  <a
                    href="https://www.concordium.com/"
                    rel="Concordium"
                  >
                    <img
                      id="partner-img"
                      src={Concordium}
                      alt="concordium"
                      title="Concordium"
                      className="  w-full concordium_Image"
                    />
                  </a>
                </div>
              </div>
              {/* <div className="  flex flex-col w-full mx-auto h-full items-center justify-center">
                <a
                  href="https://evacodes.com/"
                  className="  justify-center text-white partners-card md:mb-[40px] sm:mb-2 md:text-[32px] sm:tex-sm mb-5"
                >
                  Developers
                </a>
                <div className="  image-container">
                  <a href="https://evacodes.com" rel="eva">
                    <img
                      id="partner-img" src={EVA} alt="eva" title="eva" className="  w-full eva_hover" /> 
                  </a>
                </div>
              </div> */}
            </div>

            <div
              id="main-partner"
              className="  grid md:grid-cols-1 sm:grid-cols-2 lg:gap-x-px sm:gap-x-20 gap-y-24 items-center justify-center w-full h-full"
              data-aos="fade-right"
            >
              {/* <div className="  flex flex-col w-full mx-auto h-full items-center justify-center">
                <a
                  href="https://innmind.com"
                  className="  justify-center text-white partners-card md:mb-[40px] sm:mb-2 md:text-[32px] sm:tex-sm mb-5"
                >
                  Accelerated By
                </a>
                <div className="  image-container">
                  <a href="https://innmind.com" rel="InnMind">
                    <img
                      id="partner-img"
                      src={InnMind}
                      alt="InnMind"
                      title="InnMind"
                      className="  w-full accelerated_hover"
                    />
                  </a>
                </div>
              </div> */}
              <div className="  flex flex-col w-full mx-auto h-full items-center justify-center">
                <a
                  href="https://www.startupbootcamp.org/"
                  className="  justify-center text-white partners-card md:mb-[40px] sm:mb-2 md:text-[32px] sm:tex-sm mb-5"
                >
                  Partner
                </a>
                <div className="  image-container">
                  <a href="https://www.startupbootcamp.org/" rel="StartUp">
                    <img
                      id="partner-img"
                      src={StartUp}
                      alt="Applicature"
                      title="Applicature"
                      className="  w-full startup_hover"
                    />
                  </a>
                </div>
              </div>
              {/* <div className="  flex flex-col w-full mx-auto h-full items-center justify-center">
                <a
                  href="https://www.mempool.ventures"
                  className="  justify-center text-white partners-card md:mb-[40px] sm:mb-2 md:text-[32px] sm:tex-sm mb-5"
                >
                  Partner
                </a>
                <div className="  partners-circle">
                  <a href="https://www.mempool.ventures" rel="Frame">
                    <img
                      id="partner-img"
                      src={Frame}
                      alt="Frame"
                      title="Frame"
                      className="w-full mempol_hover"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
