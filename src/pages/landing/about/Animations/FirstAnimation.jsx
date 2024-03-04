import React, { useState, useEffect } from 'react';
import play from '../../../../assets/images/play-console-up.png';
import './animation.css';
import playUnlock from '../../../../assets/images/unlock-play.png';
import redPlanets from '../../../../assets/planets/Red-bubbles.png'
import bluePlanets from '../../../../assets/planets/Blue-bubbles.png'


function FirstAnimation() {
    return <div
        data-aos="disappear"
        data-aos-once="true"
        className={`pb-[40vh]`}>
        <div className='relative w-[100%]'>
            <img
                width='100%'
                className={`absolute top-0 `}
                data-aos="fade-red"
                data-aos-duration="3000"
                data-aos-once="true"
                src={redPlanets} />
        </div>
        <div className='relative w-[100%] mb-[10%]'>
            <img
                width='100%'
                className={`absolute top-0 `}
                data-aos="fade-lock"
                data-aos-duration="3000"
                data-aos-delay="5000"
                data-aos-once="true"
                src={bluePlanets} />
        </div>

        <div className={`flex justify-center pb-[40%]  `}>
            <div className="relative w-[100%] mt-[%] flex justify-center">
                <img
                    src={play}
                    data-aos="rotate-hidden"
                    data-aos-duration="3000"
                    data-aos-once="true"
                    className={`absolute w-[21.4%] top-0`} />
                <div className='absolute w-[100%] left-[30%] top-0'>
                    <img src={playUnlock}
                        data-aos="fade-lock"
                        data-aos-duration="2000"
                        data-aos-delay="1000"
                        data-aos-once="true"
                        className={`w-[40%] mt-[9.5%]`} />
                </div>
            </div>
        </div>

    </div>;
}

export default FirstAnimation;


