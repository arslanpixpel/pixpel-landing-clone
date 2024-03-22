import "../../../App.scss";
import Chart from "../../../assets/images/tokenomics.svg";
// import lostiposmall from "../../../assets/images/3.png";
// import lostipohalf from "../../../assets/images/half-3.png";
import roundedCard from "../../../assets/background/Round-shapes.png";
import bgBubbles from "../../../assets/background/Bubbles.png";
import AOS from "aos";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import "../roadmap/index.css";
import { useEffect } from "react";
import { animateMe } from "../../../components/hook/helper";
import "./index.css";
import line from "../../../assets/images/Line 309.png";
import ProgressBar from "./ProgressBar";

function Tokenomics() {
  useEffect(() => {
    animateMe("chart", "slide-left-element");
    AOS.init({
      duration: 2000,
      offset: 0,
    });
  }, []);

  return (
    <div id="token" className="tokenomics">
      <div id="line-token" className="relative mt-[-10%] w-[100%] ">
        <img
          src={line}
          className="w-[100%]"
          style={{ mixBlendMode: "overlay" }}
        />
      </div>
      <div className="tokenomic-lines">
        <div className="absolute  flex justify-center w-[100%] opacity-[.54]">
          <img
            src={bgBubbles}
            width="100%"
            id="tokonomic-top-bubbles"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className=" mt-[14vh] opacity-[0.54]"
          />
        </div>
        <div
          id="blues-token"
          className="absolute  w-[100%] opacity-[.66] mt-[22%]"
        >
          <img
            src={roundedCard}
            width="100%"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            alt="roundedCard"
          />
        </div>
        <div id="tokenomics" className="tokenomics-bg min-h-screen">
          <div className="flex flex-col items-center px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 py-28 gap-6 text-white">
            <div
              id="token-heading"
              className={`pt-[-20vh] `}
              data-aos="fade-down"
              data-aos-easing="linear"
            >
              <h1 className="text-white text-center font-poppins text-6xl font-semibold relative tokonomic-h1">
                Tokenomics
              </h1>
              <br />
              <br />
              <p className="text-white text-center font-poppins text-lg font-normal leading-10">
                Decentralized Autonomous Organization
              </p>
            </div>
            <div
              className={`flex flex-col chart mt-[100px] md:flex-row items-center justify-center w-full`}
            >
              <div
                data-aos="token-side"
                className="w-full items-center"
                style={{ gridAutoFlow: "column" }}
              >
                {/* <img
                  src={Chart}
                  data-aos-mirror="true"
                  alt="chart"
                  className="my-auto chart w-1/2"
                  title="chart"
                /> */}
                <ProgressBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
