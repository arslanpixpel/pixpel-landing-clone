import React from "react";
import line from "../../../../assets/mobileNav/roadmap/Line-with- dots2.png";
import bubble from "../../../../assets/mobileNav/roadmap/RoadMap-BG.png";
import imgHead from "../../../../assets/background/RoadMap title.png";
import redImage from "../../../../assets/images/bgLines.png";
// import one from "../../../../assets/mobileNav/roadmap/1.png"

const RoadMapMobile = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      className="road-map-mobile"
      style={{
        height: "234vh",
        background: "no-repeat",
        backgroundSize: "100vw , contain",
        position: "relative",
        backgroundImage: `url(${bubble})`,
        width: "100%",
      }}
    >
      {/* <div className="absolute">
        <img src={bubble} className="h-[220vh]" />
      </div> */}
      <div className="flex justify-center items-start">
        <img
          id="road-head"
          src={imgHead}
          data-aos="fade-down"
          data-aos-delay="0"
          className="relative top-[74px] left-[25vw]"
          alt="imgHead"
        />
      </div>

      <div id="road-data-head" className="flex absolute left-[40%]">
        <div className="flex justify-center " id="road-line-div">
          <img
            id="road-line"
            src={line}
            data-aos="slide-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            alt="line"
            className="absolute top-[366px] "
          />
        </div>
        <div
          className="relative top-[35vh] left-[1vw]"
          data-aos="slide-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {arr.map((val, key) => {
            // console.log(`../../../../assets/mobileNav/roadmap/${val}.png`)
            return (
              <div key={key}>
                .
                <img
                  key={key}
                  id="road-date"
                  src={`./assets/roadmap-mob/${val}.png`}
                  className=" mt-[1px] ml-[3px] "
                  alt="dates"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadMapMobile;
