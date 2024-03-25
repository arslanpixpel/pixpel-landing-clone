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
    className="road-map-mobile py-20"
  style={{
    background: "no-repeat",
    backgroundSize: "100vw , contain",
    backgroundImage: `url(${bubble})`,
    width: "100%",
  }}
>
  <div className="flex justify-center items-start">
    <img
      id="road-head"
      src={imgHead}
      data-aos="fade-down"
      data-aos-delay="0"
      className="mb-10"
      alt="imgHead"
    />
  </div>

  <div className="flex left-[40%] justify-center items-center">
      <img
        src={line}
        data-aos="slide-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        alt="line"
        className="mr-[-15px] w-[2.4rem] mt-[-1rem]"
      />
    <div
      data-aos="slide-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {arr.map((val, key) => {
        return (
          <>
            <img
              key={key}
              src={`./assets/roadmap-mob/${val}.png`}
              className=" mt-[1px] ml-[3px] w-full py-1"
              alt="dates"
            />
          </>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default RoadMapMobile;
