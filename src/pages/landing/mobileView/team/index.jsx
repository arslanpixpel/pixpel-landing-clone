// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import { team } from './team';
import TeamItem from '../../../../components/items/teamitem';
import bubbleBottom from '../../../../assets/mobileNav/team/Purple Light 5.png'


export default function TeamMob() {
    // const arr = [1,2,3,4,5,6];
      
    return (
    <>
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
        {team.map((team ,key ) => {
          return <SwiperSlide key={key}>
          <TeamItem
                    key={key}
                    name={team.name}
                    job={team.job}
                    photo={team.photo}
                    linkedin={team.linkedin}
                    font={19.5}
                    headFont={12}
                  />
          </SwiperSlide>
        })}
        
        
      </Swiper>
    </>
  );
}
