import { useState } from "react";
import linkedin from "../../assets/images/LinkedIn.svg";
import linkedinHover from "../../assets/images/LinkedIn-Hover.svg";
import "../../App.scss";
import "aos/dist/aos.css";

declare type ServiceItemProps = {
  photo: any;
  job: string;
  name: string;
  linkedin: string;
  first?: boolean;
  font?: any;
  headFont?: any;
};

function TeamItem(props: ServiceItemProps) {
  const [changeLinkedIn, setChangeLinkedIn] = useState(false);

  function handleLinkedIn() {
    setChangeLinkedIn((prev) => !prev);
    // console.log(changeLinkedIn)
  }

  const animationDirection = props.first ? "fade-right" : "fade-left";
  // console.log(changeLinkedIn)
  return (
    <>
      <div
        id="team-item-div"
        className={`flex flex-col items-center gap-1 relative z-60 overflow-x-hidden:important`}
        data-aos={animationDirection}
      >
        <a href={props.linkedin} className="relative z-60" rel="noreferrer">
          <img
            id="top"
            src={`${props.photo}`}
            alt={props.name}
            title={props.name}
            className={`rounded-[150px] font-size-[${
              props.font ? props.font : ""
            }]`}
          />
          <h5
            className={`text-white items-center text-center font-extrabold`}
            style={props.font ? { fontSize: `${props.font}px !important` } : {}}
          >
            {" "}
            {props.name}
          </h5>
          <h6
            className="text-app-blue font-extrabold items-center text-center"
            style={
              props.headFont
                ? { fontSize: `${props.headFont}px !important` }
                : {}
            }
          >
            {props.job}
            {/* <img
              src={changeLinkedIn ? linkedinHover : linkedin}
              alt="LinkedIn"
              title="LinkedIn"
              onMouseOver={() => {
                handleLinkedIn();
              }}
              onMouseOut={() => {
                handleLinkedIn();
              }}
            /> */}
          </h6>
        </a>
      </div>
    </>
  );
}

export default TeamItem;
