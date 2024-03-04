// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import EVA from "../../../../assets/logo/partners/EVA.png";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Pagination } from "swiper/modules";
import gamedashboard from "../../../../assets/mobileNav/about/gamedashboard.png";
import cex from "../../../../assets/mobileNav/about/cex.svg"
import launchpad from '../../../../assets/mobileNav/about/launchpad.svg'
import stalking from "../../../../assets/mobileNav/about/stalking.svg"
import tokenroom from "../../../../assets/mobileNav/about/tokenroom.svg"
import nftmarket from "../../../../assets/mobileNav/about/nftmarket.svg"
import nftfeature from "../../../../assets/mobileNav/about/nftfeature.svg"
import p2pmarket from "../../../../assets/mobileNav/about/p2pmarket.svg"
import launchpad2 from '../../../../assets/mobileNav/about/launchpad2.svg'
import dex from "../../../../assets/mobileNav/about/dex.svg"
import inventory from "../../../../assets/mobileNav/about/inventory.svg"
import wallet from "../../../../assets/mobileNav/about/wallet.svg"






export default function AboutMob() {
  const arr = [
    { img: gamedashboard },
    { img: cex },

    { img: launchpad },

    { img: stalking },

    { img: tokenroom },

    { img: nftmarket },

    { img: nftfeature },

    { img: p2pmarket },

    { img: launchpad2 },

    { img: dex },

    { img: inventory },

    { img: wallet }

  ];

  return (
    <>
      <Swiper
        slidesPerView={1.4}
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
          return (
            <SwiperSlide key={key}>
              <div className="  flex flex-col w-full mx-auto h-full items-center pb-[40vh] justify-center">
                <div className=" w-[243px] mb-[3%] image-container">
                  <img
                    id="dashboard"
                    src={val.img}
                    alt="eva"
                    title="eva"
                    className=" relative w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
