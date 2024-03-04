import React ,{useState} from 'react'
import bgNav from '../../../../assets/mobileNav/hero/Frame 2208.png'
import titleNav from '../../../../assets/mobileNav/hero/Title and text.svg'
import robot from '../../../../assets/mobileNav/hero/Robot.svg'
import Kava1 from "../../../../assets/images/kava.png";
import Kava2 from '../../../../assets/images/concord.png';
import Kava1Hover from '../../../../assets/images/kava-hover.png';
import Kava2Hover from '../../../../assets/images/concord-hover.png'
import './index.css'

const BannerNav = () => {
  const [changeKava1 , setChangeKava1] = useState(false);
  const [changeKava2 , setChangeKava2] = useState(false);
 
  function handleKava1 () {
    setChangeKava1((prev) => !prev);
  }
  
  function handleKava2 () {
    setChangeKava2((prev) => !prev);
  }
  return (
    <>
      <div className="banner-nav relative w-full min-h-screen min-w-screen  mt-[-156px]:important" data-aos="fade-up">
        <div className=" w-[100%] h-[100%]  content absolute ">
            <img id="bg-waves-hero" src={bgNav} width="100%" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row pt-36 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 min-h-screen gap-8 lg:gap-16">
          <div id="text-feild" className="grid grid-col-2 w-[100%] mt-[-18%] xl:w-[70%] lg:w-[80%] text-white content-center" data-aos="fade-right" data-aos-delay="800">
            <img src={titleNav} className='w-[100%] ml-[4vw] mt-[-4vh]' />
            <div className="grid gap-0 mt-[20em] w-full pb-10 pt-10">
             <div className='centerBtnMob'>  
              <a
                href="https://docsend.com/view/q83qhhu6h66ckvgk"
                rel="noreferrer"
                className="flex flex-col items-center  bg-app-blue-500 py-4 px-4 rounded-full w-[176.21px]  mt-8 hover:bg-[#50D0FB]"
              >
                <div className="items-center my-auto mx-auto">Check Deck</div>
              </a>
              </div>
              <div className='centerBtnMob'> 
              <a
                href="https://docsend.com/view/p26a9bvfpqf52ddi"
                rel="noreferrer"
                className="flex flex-col bg-app-green py-4 px-4 rounded-full w-[176.21px]  mt-8 hover:bg-[#1FF19F]"
              >
                <div className="items-center my-auto mx-auto">White Paper</div>
              </a>
            </div>
            </div>
          </div> 
          <div id="new-main-nav" className='container' style={{ position: 'relative' }}>
  <div className="w-full flex-col justify-center top-20 relative left-[2vw]" data-aos="fade-left" data-aos-delay="800">
    <div className="absolute inset-0 responsive" data-aos="fade-left">
      <img   alt="frame" src={robot} width="375.52px" className="absolute top-96 mb-32" />
      <div className="flex justify-center ">
      <div className="z-50 fixed top-96">
      <div className="gap-x-32 flex flex-row">
        <a href="#ok" className="w-[99.235px]" onMouseOver={() => { handleKava1() }} onMouseOut={() => handleKava1()}>
          <img alt="kava1" src={changeKava1 ? Kava1Hover : Kava1} className="relative kava1" />
        </a>
        <a href='#ok2' className="w-[99.235px]" onMouseOver={() => { handleKava2() }} onMouseOut={() => handleKava2()}>
          <img alt="kava2" src={changeKava2 ? Kava2Hover : Kava2} className="relative kava2" />
        </a>
      </div>
    </div>
    </div>
    </div>
  </div>
  
</div>
        </div>
      </div>
</>
  )
}

export default BannerNav


// <div className='banner-nav justify-center h-[100vh] w-[100%] bg-no-repeat bg-contain' style={{backgroundImage: `url(${bgNav})`}}>
//   <div className='relative top-0'>
//     <img src={titleNav} className='fixed w-[50%]' />
//   </div>
//   <div id="kava-btn-nav" className="top-[39%] flex absolute z-100 w-[100%] ">
//     <div className="gap-x-7 flex flex-row ml-[82%] justify-end w-100 relative">
//       <a href="#ok" className="w-[100%]" onMouseOver={() => {handleKava1()}} onMouseOut={() => handleKava1()}>
//         <img alt="kava1" width='99.235px' src={changeKava1 ? Kava1Hover : Kava1} className="relative kava1" />
//       </a>
//       <a href='#ok2' className="w-[100%]" onMouseOver={() => {handleKava2()}} onMouseOut={() => handleKava2()}>
//         <img alt="kava2" width='99.235px' src={changeKava2 ? Kava2Hover : Kava2} className="relative kava2" />
//       </a>
//     </div>
//   </div>
//   <div className='relative'>
//     <img src={robot} className='fixed top-[50%]' />
//   </div>
//   <div id="button-top-nav" className="flex gap-4 top-[30%] items-center mt-8">
//     <a
//       href="https://docsend.com/view/q83qhhu6h66ckvgk"
//       rel="noreferrer"
//       className="flex flex-col bg-app-blue-500 py-2 px-4 rounded-full w-36 h-12 hover:bg-[#50D0FB]"
//     >
//       <div className="items-center my-auto mx-auto">Check Deck</div>
//     </a>
//     <a
//       href="https://docsend.com/view/p26a9bvfpqf52ddi"
//       rel="noreferrer"
//       className="flex flex-col bg-app-green py-2 px-4 rounded-full w-36 h-12 hover:bg-[#1FF19F]"
//     >
//       <div className="items-center my-auto mx-auto">White Paper</div>
//     </a>
//   </div>
// </div>