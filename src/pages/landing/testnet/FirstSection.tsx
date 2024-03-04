import React from "react";
import imgBg from "../../../assets/testnet-img/LightFondoHome1.png";
import Vector from "../../../assets/testnet-img/Vector1.png";
import Vector2 from "../../../assets/testnet-img/Vector2.png";
import Vector3 from "../../../assets/testnet-img/Vector3.png";
import pixpelLogo from "../../../assets/logo/logo.svg";
import titleHead from "../../../assets/testnet-img/LaunchedTest.svg";
import bgSquare from "../../../assets/testnet-img/Squared-floor.png";
import bgStar1 from "../../../assets/testnet-img/Frame1.png";
import bgStar2 from "../../../assets/testnet-img/Frame2.png";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import Stars from "../../../assets/testnet-img/stars.gif";

type Props = {};

const FirstSection = (props: Props) => {
  const today = new Date();
  // Timer Changed
  // Timer Changed
  const daysUntilSaturday = 30 - today.getDay();
  const nextSaturday = new Date(today);
  nextSaturday.setDate(today.getDate() + daysUntilSaturday);
  nextSaturday.setHours(0, 0, 0, 0);

  // Set the end date to January 23, 2024
  const DATE = new Date("2024-01-22T23:59:59").getTime();
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat w-full h-full overflow-x-hidden"
        style={{
          backgroundImage: `url(${imgBg})`,
          backgroundBlendMode: "screen",
          mixBlendMode: "screen",
        }}
      >
        <div className="flex justify-start bg-cover bg-no-repeat">
          <img
            className="absolute hideME"
            style={{ backgroundBlendMode: "screen", mixBlendMode: "screen" }}
            src={Vector}
            alt="bgPurple"
          />
          <a href="https://www.pixpel.io/">
            <img
              src={pixpelLogo}
              alt="logo"
              className="sm:w-[356px] my-10 mx-10 relative z-10 w-[280px]"
            />
          </a>
        </div>
        <div className="flex justify-center w-100">
          <img src={titleHead} />
        </div>
        {/* CLOCK & Images Section SECTION */}
        <div
          className="mix-blend-plus-lighter bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${Stars})` }}
        >
          <div className="flex justify-center pt-20 w-full opac">
            <FlipClockCountdown
              className="lg:w-full  flex justify-center"
              to={DATE}
              hideOnComplete={false}
              showSeparators={false}
              digitBlockStyle={{
                fontSize: "110px",
                width: "124px",
                height: "145px",
              }}
              labelStyle={{ color: "#fff9", fontSize: "18px" }}
            />
          </div>
          <div
            className="flex justify-between w-full bg-cover bg-no-repeat h-auto"
            style={{ backgroundImage: `url(${bgSquare})` }}
          >
            <div className="bg-cover bg-blend-screen rounded-tr-full bg-no-repeat w-full">
              <img src={bgStar1} />
            </div>
            <div className="bg-cover bg-no-repeat w-full flex justify-end">
              <img
                className="bg-cover bg-no-repeat bg-blend-screen"
                src={bgStar2}
              />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default FirstSection;
