import React from "react";
import backUp from "../../../assets/testnet-img/BackedBy.svg";
import Stars from "../../../assets/testnet-img/stars.gif";
import VectorSm from "../../../assets/testnet-img/VectorSm.png";
import ForPxp from "../../../assets/testnet-img/main.svg";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <div>
      <div
        className="mix-blend-plus-lighter"
        style={{
          background: `url(${Stars})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20 flex justify-center">
          <img src={backUp} />
        </div>
        <div className="pt-10 flex justify-center">
          <img src={VectorSm} />
        </div>
        <div className="pt-20 px-10 pb-36 flex justify-center">
          <img src={ForPxp} />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
