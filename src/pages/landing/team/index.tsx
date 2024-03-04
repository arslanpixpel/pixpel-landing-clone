import TeamItem from "../../../components/items/teamitem";
import { teamList, coreteamList } from "./teamlist";
import lostiposmall from "../../../assets/images/2.png";
import "../../../App.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bottomBlur from "../../../assets/images/bottom_blur.png";
import HeadingTitle from "../../../assets/mobileNav/team/Our-team.svg";
import imgNavBg from "../../../assets/mobileNav/team/Bubbles.png";
import colorNavBg from "../../../assets/mobileNav/team/Team BG.png";
import TeamMob from "../mobileView/team";
import bgMob from "../../../assets/mobileNav/team/Frame.png";

function Team() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="team" className="team-bg min-h-screen mt-48  pb-[8%]">
        {/* MOBILE ONLY  */}
        <div id="main-nav-setting" className="absolute w-full">
          <img
            className="relative opacity-[.6]"
            src={colorNavBg}
            width="100%"
          />
        </div>
        {/* MOBILE ONLY END */}
        <img
          id="bg-bubbles-team-nav"
          className="relative top-[15%]"
          src={imgNavBg}
        />
        <img
          id="bg-bubbles-team"
          src={lostiposmall}
          alt="lotipo"
          className="relative  w-[39px] h-[38px] left-[8%] top-[582px]"
        />
        <img
          id="bg-bubbles-team"
          src={lostiposmall}
          alt="lotipo"
          className="relative  w-[68px] h-[67px] left-[4%] top-[650px]"
        />
        <img
          id="bg-bubbles-team"
          src={lostiposmall}
          alt="lotipo"
          className="relative  w-[39px] h-[38px] left-[83%] top-[643px]"
        />
        <img
          id="bg-bubbles-team"
          src={lostiposmall}
          alt="lotipo"
          className="relative  w-[68px] h-[67px] left-[88%] top-[454px]"
        />
        <div id="team-mid-sec" className="flex flex-col gap-10 items-center">
          {/* NAV HEADING */}
          <div id="main-nav-setting" className="relative">
            <img src={HeadingTitle} />
          </div>
          {/* NORMAL HEADING */}

          {/* <div id="Heading-Team" className="flex text-white text-[72px] relative top-0 font-semibold leading-normal overflow-x-hidden" data-aos="fade-down">
            <p className="relative">
            Our Team
            </p>
          </div>
       */}
          <div className="w-full flex flex-col xl:flex-row gap-6 justify-center xl:gap-20">
            {/* NAV TEAM LIST */}
            <div
              style={{
                backgroundImage: `url(${bgMob})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                id="main-nav-setting"
                className="flex justify-center w-[100%] mt-3 ml-[-8vw] min-w-[116vw]"
              >
                <TeamMob />
              </div>
            </div>
            {/* NORMAL TEAM LIST */}
            <div className="team-list mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-flow-row last-child:col-span-2 last-of-type:mr-6 gap-6 xl:gap-20">
              {/* <TeamItem
                name={ceo.name}
                job={ceo.job}
                photo={ceo.photo}
                linkedin={ceo.linkedin}
              /> */}
              {coreteamList.map((team, idx) => {
                return (
                  <TeamItem
                    key={idx}
                    name={team.name}
                    job={team.job}
                    photo={team.photo}
                    linkedin={team.linkedin}
                    first={true}
                  />
                );
              })}
              {teamList.map((team, idx) => {
                return (
                  <TeamItem
                    key={idx}
                    name={team.name}
                    job={team.job}
                    photo={team.photo}
                    linkedin={team.linkedin}
                    first={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div
          id="bg-blur"
          className="absolute w-[100%] mt-[-6vh] h-[270vh] bg-repeat bg-cover min-h-screen "
          style={{
            backgroundImage: `url(${bottomBlur})`,
            backgroundPositionY: "-16vh",
          }}
        ></div>
      </div>
    </>
  );
}

export default Team;
