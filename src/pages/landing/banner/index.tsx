import Hero from "../../../assets/images/banner_hero_right.png";
import HeroFrame from "../../../assets/images/iamges2.png";
import Kava1 from "../../../assets/images/kava.png";
import Kava2 from "../../../assets/images/concord.png";
import bgImg from '../../../assets/background/Hero-Bubbles.png';
import Kava1Hover from '../../../assets/images/kava-hover.png';
import Kava2Hover from '../../../assets/images/concord-hover.png'
import bottomBlur from '../../../assets/background/Gradient and blur.png'
import smallBtn from '../../../assets/images/bubble-header-right.png'
import "../../../App.scss";
import lostiposmall from "../../../assets/images/1.png";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import line from '../../../assets/images/Line 309.png'
import img from '../../../assets/background/Main-illustration.png'


function Banner() {
  const [changeKava1, setChangeKava1] = useState(false);
  const [changeKava2, setChangeKava2] = useState(false);

  function handleKava1() {
    setChangeKava1((prev) => !prev);
  }

  function handleKava2() {
    setChangeKava2((prev) => !prev);
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="banner-normal relative w-full min-h-screen min-w-screen  mt-[-176px]:important 3xl:flex 3xl:items-center 3xl:justify-between" data-aos="fade-up">
        <div className="banner-bg w-full min-h-screen  content absolute bottom-0">
        </div>
        <div id="bottom-blur" className="absolute  w-[100%]">
          <img src={bottomBlur} className="relative bottom-0 w-[100%] " />
        </div>
        =
        <div className="absolute main top-0 mt-[3.6%]">
          <img id="bg-hero" src={bgImg} className="relative ml-[4%] background  w-[96%]" />
        </div>

        <div className="flex 3xl:items-center flex-col-reverse lg:flex-row pt-36 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 min-h-screen gap-8 lg:gap-16">
          <div id="text-feild" className="pt-[15vh] grid grid-col-1 mt-[-18%] xl:w-[70%] lg:w-[80%] text-white content-center" data-aos="fade-right" data-aos-delay="800">
            {/* <img src={lostiposmall} alt="lotipo" className="absolute left-[8%] top-[308px]" />
            <img src={lostiposmall} alt="lotipo" className="absolute left-[5%] top-[5%] w-[38px] h-[38px]" />
            <img src={lostiposmall} alt="lotipo" className="absolute left-[33%] top-[2.7%] w-[19px] h-[19px]" />
            <img src={lostiposmall} alt="lotipo" className="absolute left-[33%] top-[3.4%] w-[54px] h-[54px]" /> */}
            <div id="font-top1" className="text-[72px] font-semibold">Crypto games</div>
            <div id="font-top2" className="text-[72px] font-semibold">Safe and fun</div>
            <div id="font-para" className="pt-8 text-white font-poppins text-[20px] font-light leading-[40px]">
              Pixpel was created to provide all-around services for the Crypto
              games community. Our main goal is to make crypto games safe and
              enjoyable. In Pixpel, game developers and players have a place to
              connect, invest, and play. If you want to know more about us,
              please check out our deck.
            </div>
            <div id="button-top" className="flex gap-4">
              <a
                href="https://docsend.com/view/q83qhhu6h66ckvgk"
                rel="noreferrer"
                className="flex flex-col bg-app-blue-500 py-2 px-4 rounded-full w-36 h-12 mt-8 hover:bg-[#50D0FB]"
              >
                <div className="items-center my-auto mx-auto">Check Deck</div>
              </a>
              <a
                href="https://docsend.com/view/p26a9bvfpqf52ddi"
                rel="noreferrer"
                className="flex flex-col bg-app-green py-2 px-4 rounded-full w-36 h-12 mt-8 hover:bg-[#1FF19F]"
              >
                <div className="items-center my-auto mx-auto">White Paper</div>
              </a>
            </div>
          </div>
          <div id="checker" className="w-full flex-col relative left-[2vw]" data-aos="fade-left" data-aos-delay="800">
{/* RESPONSIVE AFTER 2100 */}
            <div className="w-full" id="kava-always">
              <img alt="hero" src={Hero} className="z-10 p-5" />
            </div>
            <div className="absolute inset-0 w-[100%] responsive" data-aos="fade-left">
              <img alt="frame" src={HeroFrame} className="" id="kava-always" />
            </div>
            <div className="flex justify-center ">
              <div id="kava-new" className="z-50 flex h-1/2  justify-center top-60 ml-5 fixed">
                <div id="kava-always" className="gap-x-12 flex flex-row mt-[20px]">
                  <a href="#ok" id="kava-btn" className="w-[64.23px]" onMouseOver={() => { handleKava1() }} onMouseOut={() => handleKava1()}>
                    <img alt="kava1" src={changeKava1 ? Kava1Hover : Kava1} className="relative kava1" />
                  </a>
                  <a href='#ok2' id="kava-btn" className="w-[64.23px]" onMouseOver={() => { handleKava2() }} onMouseOut={() => handleKava2()}>
                    <img alt="kava2" src={changeKava2 ? Kava2Hover : Kava2} className="relative kava2" />
                  </a>
                </div>
              </div>
            </div>

{/* RESPONSIVE BEFORE 2100 */}
   <div className="relative" id="kava-sometimes" data-aos="fade-left" data-aos-delay="800">
  {/* KAVA BTN */}
  <div id="kava-div-new" className="absolute flex justify-center w-full">
    <a
      href="#ok"
      className="w-[74.23px] px-2 my-[30%] mx-[2%]"
      id="kava-new-btn"
      onMouseOver={() => { handleKava1() }}
      onMouseOut={() => handleKava1()}
    >
      <img
        alt="kava1"
        src={changeKava1 ? Kava1Hover : Kava1}
        className="kava1"
      />
    </a>
    <a
      href="#ok2"
      id="kava-new-btn"
      className="w-[74.23px] px-2 my-[30%] mx-[0%] "
      onMouseOver={() => { handleKava2() }}
      onMouseOut={() => handleKava2()}
    >
      <img
        alt="kava2"
        src={changeKava2 ? Kava2Hover : Kava2}
        className="kava2"
      />
    </a>
  </div>
  <img src={img} className="img-fluid" alt="Your Image" />
</div>


          </div>
        </div>

      </div>
      <div className="relative ">
        <img src={line} style={{ mixBlendMode: 'overlay' }} />
      </div>
    </>
  );
}

export default Banner;


