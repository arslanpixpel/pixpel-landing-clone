import React , {useEffect} from 'react'
import Chart from "../../../../assets/mobileNav/tokenomics/Chart Things.svg";
import roundedCard from "../../../../assets/mobileNav/tokenomics/Dark.svg";
import bgBubbles from "../../../../assets/mobileNav/tokenomics/Rounded elements.png";
import AOS from 'aos';
import title from '../../../../assets/mobileNav/tokenomics/Tokenomics Title.svg'

const TokenomicsMob = () => {
        useEffect(() => {
          AOS.init({
            duration: 2000,
            offset: 0,
          });
        }, []);
      
  return (
    <div className='mob-token'>
      <div className="tokenomic-lines">
        <div className="absolute  flex justify-center w-[100%] opacity-[.54]">
          <img id="nav-bubbles-token" src={bgBubbles} width="100%" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" className=" mt-[25%] opacity-[0.54]" />
        </div>
        
        <div id="tokenomics" className="tokenomics-bg-mob min-h-screen">
          <div className="flex flex-col items-center px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 py-28 gap-6 text-white">
            <div
              id="token-heading"
              className={`pt-20 w-[100%] flex justify-center `}
              data-aos="fade-down"
              data-aos-easing="linear">
             <img src={title} className='w-[70%]' />
            </div>
            <div id="chart-div" className={`flex flex-col chart mt-[100px] md:flex-row items-center justify-center w-[100%]`} >
              <div data-aos="token-side" className="w-[100%] flex justify-center md:w-1/2 ">
                <img src={Chart}  data-aos-mirror="true" alt="chart" className="my-auto chart w-[100vw] " title="chart" />
              </div>
            </div>
          </div>
          <div id="roundCard-nav-token" className="relative flex justify-center  w-[100%] opacity-[.66] mt-[-10vh] pb-[50vh]">
          <img src={roundedCard} width="75%" data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            alt="roundedCard"
            id="Progres-Img-Tokenomics" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsMob