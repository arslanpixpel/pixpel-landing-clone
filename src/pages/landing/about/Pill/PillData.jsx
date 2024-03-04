import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import svg from '../../../../assets/svgs/gameDashboard.svg';

const PillData = ({ val , DATA }) => {
    // const {filteredData} = useAppContext()
    // const [mainData, setMainData] = useState("");
   
    // useEffect(() => {
    //     // console.log(filteredData);
    //     setMainData(filteredData);
    // }, [filteredData]);
    
    return (
        <div className='flex justify-center'>
               <div id="title" className='absolute top-0 right-0 bottom-0 left-0'>
                {/* <img src='/assets/svgs/gameDashboard.svg' /> */}
               </div>
        </div>
    );
    
};

export default PillData;



//     return (<div key={index} className={`absolute container w-full ${val.title}-content z-10`}>
//             <div className='container main-bg -z-10'>
//                 <p className='pt-5 headline'>{val.title}</p>
//                 <p className='headline-tag'>{val.tagline}</p>
//                 <div className='main-box'>
//                     <p className='main-paragraph'>
//                         {val.paragraph}
//                         <br />
//                         <br />
//                         {val.paragraph_bottom}
//                     </p>
//                 </div>
//                 {/* TOP LIST */}
//                 <div className='top-list-div'>
//                     <div className='main-list-div py-5'>
//                         {val.top_list.map((val, key) => {
//                             return <ul>
//                                 <li>{val.data}</li>
//                             </ul>
//                         })}
//                     </div>
//                 </div>
//                 {/* BOTTOM LIST */}
//                 <div className='bottom-list-div'>
//                     <div className='main-list-div py-5'>
//                         {val.bottom_list.map((val) => {
//                             return <ul>
//                                 <li>{val.data}</li>
//                             </ul>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>


// {midData ? (
//     <div className='absolute container w-full Gamedashboard-content z-10'>
//             <div className='container main-bg -z-10'>
//                 <p className='pt-5 headline'>Gamedashboard</p>
//                 <p className='headline-tag'>The All-In-One Game Analytics Platform</p>
//                 <div className='main-box'>
//                     <p className='main-paragraph'>
//                         Gamedashboard is the all-in-one game analytics platform that gives you the insights you need to make the best decisions for your game. With Gamedashboard, you can track everything from NFT sales to token transactions to player engagement.
//                         <br />
//                         <br />
//                         Here are just a few of the things you can do with Gamedashboard:
//                     </p>
//                 </div>
//                 <div className='top-list-div'>
//                     <div className='main-list-div'>
//                         <ul className='py-5'>
//                             <li>Track NFT sales and token transactions to see how your in-game economy is performing.</li>
//                         </ul>
//                         <ul>
//                             <li>Monitor player engagement to see how long people are playing your game and what they're doing while they're playing.</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className='bottom-list-div'>
//                     <div className='main-list-div'>
//                         <ul className='py-5'>
//                             <li>Identify trends in player behavior to see what's working and what's not.</li>
//                         </ul>
//                         <ul>
//                             <li>Make informed decisions about your game's development and marketing based on data.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
// )  : console.log('NO') }