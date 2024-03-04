import { useEffect } from "react";
import "../../../App.scss";
import redImage from "../../../assets/images/bgLines.png";
import imgHead from "../../../assets/background/RoadMap title.png";
import line from '../../../assets/background/Line with dots.png';
import dates from '../../../assets/background/Dates.png';
import AOS from 'aos';
import bubble from '../../../assets/background/light-blue-bubbles.png'
import purpleImage from '../../../assets/images/red1.png'
import bottomBlur from '../../../assets/images/bottom-blur-roadmap.png'
import 'aos/dist/aos.css';
import './index.css';
import { animateMe } from '../../../components/hook/helper';
// import { obeserveMe } from "./scrollFunc";


function Roadmap() {
  useEffect(() => {
    animateMe('line', 'slide-up-down-element');
    animateMe('date', 'slide-down-up-element');
    AOS.init({ duration: 2000 });
  }, []);

  return (
<div>
<div className="main" id="roadmap" style={{ height: "200vh", background: "no-repeat", backgroundSize: "100vw 300vh", position: "relative", backgroundImage: `url(${redImage})`, width:"100%"}}>
      <div className="flex justify-center items-start" >
        <img id="road-head" src={imgHead} data-aos="fade-down" data-aos-delay="0" className="relative top-[74px] " alt="imgHead" />
      </div>
      <div className="flex justify-center" id="road-line-div">
        <img id="road-line" src={line} data-aos="slide-down" data-aos-delay="50" data-aos-duration="1000" alt="line" className="absolute top-[366px] " />
      </div>
      <div className="flex justify-center relative">
        <img id="road-date" src={dates} data-aos="slide-up" data-aos-delay="50" data-aos-duration="1000" className="absolute top-[120px] "
          alt="dates"
           />
      </div>
      <div className="flex justify-center">
        <img src={bubble}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" className="absolute top-[66px]  w-[100%]" style={{ opacity: '0.4' }} 
          alt="bubble"
          />
      </div>
      

      <div className="absolute w-[100%] bottom-0">
        <img src={bottomBlur} width='100%' className="opacity-[0.9px]" />
      </div>
      </div>
      <div className="flex justify-end absolute w-[100%] ">
        <img src={purpleImage}
          id="purplePlanet"
          alt="purpleimage"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" className="absolute bottom-0 opacity-[.54] " />
      </div> 
      </div>
  );
}

export default Roadmap;



// import "../../../App.scss";
// import redImage from "../../../assets/background/roadmap-background.png";
// import imgHead from "../../../assets/background/RoadMap title.png";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

// function Roadmap() {
// function Tokenomics() {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);
//   return (
//     <div id="roadmap" style={{ height: "180vh", background: "no-repeat" , backgroundSize: "95vw 180vh" , position: "relative" , backgroundImage: `url(${redImage})`}}>
//       <div className="flex justify-center items-start pt-16" >
//         <img src={imgHead} />
//       </div>
//     </div>

//   );
// }

// export default Roadmap;
