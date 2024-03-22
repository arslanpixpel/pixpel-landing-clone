// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import EVA from "../../../../assets/logo/partners/EVA.png";

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import Concordium from "../../../../assets/logo/partners/CONCORDIUM.png";
import Applicature from "../../../../assets/logo/partners/applicature.png";
import StartUp from "../../../../assets/logo/partners/startup.png";
import Frame from "../../../../assets/logo/partners/Frame.png";
import InnMind from "../../../../assets/logo/partners/InnMind.png";


export default function PartnerMob() {

  const arr = [
        { img: Concordium  , name: 'BlockChain',href: "https://concordium.com/developer-ecosystem/" , hover : 'concordium_Image'},
        // { img: EVA, name: 'Developers', hover : 'eva_hover' },
        // { img: InnMind , name: 'Accelerated By', hover : 'accelerated_hover' },
        { img: StartUp , name: 'Partner', href: "https://www.startupbootcamp.org/" ,hover : 'startup_hover:hover' },
        // { img: Frame , name: 'Partner' , hover:'mempol_hover' }
      ];
      
    return (
      <>
      <style>
        {`
          .swiper {
            /* width: 90vw; */
            /* height: 100%; */
          }
      
          .swiper-slide {
            /* text-align: center; */
            /* font-size: 18px; */
            /* background: none; */
      
            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;
          }
      
          .swiper-slide img {
            /* display: block; */
            /* width: 100%; */
            /* height: 100%; */
            /* object-fit: cover; */
          }
      
          .swiper-pagination {
            display: none;
          }
        `}
      </style>
      <Swiper
        slidesPerView={1.8}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {arr.map((val, key) => {
          return <SwiperSlide key={key}>
            <div className="flex flex-col w-full mx-auto h-full items-center justify-center">
              <a
                href={val.href} 
                className="justify-center text-white partners-card md:mb-[40px] sm:mb-2 md:text-[32px] sm:tex-sm mb-5"
              >
                {val.name}
              </a>
              <div className="image-container">
                <a href={val.href} rel={val.name}>
                  <img
                    id="partner-img" src={val.img} alt="eva" title="eva" className={`w-full ${val.hover}`} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
