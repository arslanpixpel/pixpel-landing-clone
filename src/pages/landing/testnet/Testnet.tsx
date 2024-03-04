import React, { useEffect } from "react";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";
// import TestNetLandingPage from "../../../assets/testnet-img/TestNet-Landing-Page.png";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import BgMain from "../../../assets/testnet-img/LightFondoHome2.png";
import ThirdSection from "./ThirdSection";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
type Props = {};

const Testnet = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const logoutParam = new URLSearchParams(window.location.search).get(
      "logout"
    );
    console.log(logoutParam, "logout");

    if (logoutParam === "true") {
      localStorage.removeItem("user");
      window.location.href = "https://www.pixpel.io/";
    }
  }, [navigate]);
  return (
    <div>
      {/* <div className="w-full flex items-center 3xl:h-[100vh]">
        <img className="w-full" src={TestNetLandingPage} />
      </div> */}
      {/* FIRST SECTION */}
      <FirstSection />
      {/* SECOND SECTION */}
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BgMain})` }}
      >
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    </div>
  );
};

export default Testnet;
