import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import bg from "../../../assets/background/about-lines.png";
import bgArea from "../../../assets/images/bg.png";
import "./index.css";
import NavPill from "./Pill/NavPill";
import FirstAnimation from "./Animations/FirstAnimation";
import redPlanets from "../../../assets/planets/Red-bubbles.png";
import bluePlanets from "../../../assets/planets/Blue-bubbles.png";
import imgAboutNav from "../../../assets/mobileNav/about/AboutTitle.svg";
import mobPlanets from "../../../assets/mobileNav/about/Bubbles.png";
import AboutMob from "../mobileView/about/index";

const DonutCircle = () => {
  const [fadeHeading, setfadeHeading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 4500);
    setTimeout(() => {
      setfadeHeading(true);
    }, 3000);
  }, []);

  const props = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reverse: fadeIn,
    delay: 2000,
  });

  const headingProps = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 100,
  });
  console.log(fadeIn);

  return (
    <>
      <div
        className="about-main relative content-about min-w-full min-h-full"
        id="about"
      >
        <div
          className="absolute w-full h-full inset-0 bg-no-repeat filter blur-3"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="flex w-[100%]">
          <div
            className="absolute inset-0 w-1/2 ml-[50%] bg-no-repeat mt-[40%] filter blur-3"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
        {fadeHeading ? (
          <animated.div>
            <div
              className={`pt-10 w-[100%] flex justify-center ${
                fadeHeading ? "" : "hidden"
              }`}
              data-aos="fade-down"
              data-aos-easing="linear"
              id="about-text-sec-mob"
            >
              <img src={imgAboutNav} width="80%" />
            </div>
            <div
              className={`pt-10 ${fadeHeading ? "" : "hidden"}`}
              data-aos="fade-down"
              data-aos-easing="linear"
              id="about-text-sec"
            >
              <h1 className="text-white text-center font-poppins text-6xl font-semibold relative ">
                About Us
              </h1>
              <br />
              <br />
              <p className="text-white text-center font-poppins text-lg font-normal leading-10">
                Providing everything you need to play and create
              </p>
            </div>
          </animated.div>
        ) : (
          ""
        )}
        <div id="animation-hide">
          <FirstAnimation />
        </div>
        {/* HEADING */}

        <div
          id="about"
          className={`relative z-10 mb-[12%] ${fadeIn ? "" : "hidden"}`}
        >
          <div className={`${fadeIn ? "fade-me-in" : ""}`}>
            {/* Mobile Nav Area */}
            <div className="fade-me-in-new-mob">
              <div id="planet" className="planet">
                <img src={mobPlanets} />
              </div>
              <div id="Mob-Nav-Slider" className="absolute w-[100%] top-[15%] ">
                <AboutMob />
              </div>
            </div>
            {/* Mobile Nav Area End */}

            {/* NavPill AREA */}
            <div
              data-aos="check-back"
              data-aos-duration="2000"
              data-aos-delay="2000"
              data-aos-once="true"
            >
              <div id="planets-normal" className="relative pb-[4%]">
                <img className="absolute w-full" src={redPlanets} />
                <img className="absolute w-full top-[1%]" src={bluePlanets} />
              </div>
              {/* Hidden applied for animation fixation */}
              <div id="Nav-Pill-main" className="py-[7%] mt-[-3rem]">
                <NavPill />
              </div>
            </div>
          </div>
          {/* NavPill AREA END */}
        </div>
      </div>
    </>
  );
};

export default DonutCircle;
