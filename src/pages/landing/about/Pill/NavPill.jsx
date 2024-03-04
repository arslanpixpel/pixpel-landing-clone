import React, { useEffect, useState } from 'react';
import bgArea from '../../../../assets/images/bg.png';
import './test.css';
import PillData from './PillData';
import { useAppContext } from '../../../../context/AppContext';
import About from '../about';


const Test = () => {
    const [Data, , toggleBg, handleToggle] = About();
    const [link, setLink] = useState('');
    const x = useAppContext();
    const midData = x.midData;
    const filteredData = x.filteredData;


    function handleButton(e) {
        e.preventDefault();
        const val = x.midData.filter(val => val.hash === e.target.value)[0];
        const title = document.getElementById('title');
        const valLink = `assets/clickedImg/${val.hash}-hover.png`;
        setLink(valLink);
        const img = document.getElementById('get');
        img.innerHTML = `<img src="${bgArea}" />`;
      
        const image = new Image();
        image.src = valLink;
        image.onload = () => {
        setTimeout(() => {
            img.innerHTML = `<img id="YourImage" src="${valLink ? valLink : 'assets/clickedImg/bg.png'}" className="relative z-20" alt="Your Image" />`;
            if(valLink) {
                title.innerHTML = `<img id="main-image" src="/assets/svgs/${val?.hash}.svg" />`;
            }
        } , 200);  
          
          x.setFilteredData(val);
        };
        image.onerror = () => {
          
          console.log('Image load error');
          
        };
      }
      
    useEffect(() => {
        const imagewidth = 1386;
        const imageheight = 786;

        const areas = [
            { title: 'inventory', coords: [52, 200, 89, 140, 135, 92, 182, 58, 256, 20, 276, 69, 292, 107, 248, 124, 179, 175, 141, 222, 107, 289, 65, 273, 28, 252] },
            { title: 'tokenroom', coords: [1134, 760, 1120, 722, 1104, 678, 1149, 655, 1212, 606, 1255, 551, 1276, 502, 1287, 467, 1369, 497, 1347, 559, 1304, 635, 1257, 684, 1196, 731] },
            { title: 'staking', coords: [1369, 493, 1324, 473, 1288, 463, 1296, 404, 1294, 359, 1285, 318, 1276, 287, 1268, 266, 1303, 249, 1345, 223, 1363, 272, 1380, 335, 1381, 422] },
            { title: 'launchpad1', coords: [1343, 218, 1303, 239, 1267, 260, 1220, 187, 1179, 151, 1135, 121, 1096, 106, 1069, 100, 1073, 70, 1077, 8, 1168, 38, 1233, 79, 1297, 142] },
            { title: 'cex', coords: [1072, 6, 1067, 50, 1063, 99, 1041, 95, 1009, 94, 971, 96, 960, 94, 940, 94, 939, 64, 940, 33, 942, 2, 994, 4, 1036, 4] },
            { title: 'dex', coords: [99, 319, 92, 351, 89, 391, 89, 402, 60, 399, 18, 396, 5, 394, 5, 358, 9, 324, 17, 290, 26, 259, 68, 279, 107, 295] },
            { title: 'launchpad2', coords: [92, 429, 105, 489, 145, 568, 174, 607, 200, 631, 154, 707, 89, 644, 49, 578, 27, 530, 14, 481, 3, 403, 46, 405, 92, 405] },
            { title: 'p2pmarket', coords: [222, 645, 255, 665, 337, 689, 418, 691, 475, 692, 474, 739, 473, 782, 352, 782, 268, 765, 207, 742, 160, 709, 180, 672, 204, 633] },
            { title: 'nftmarket', coords: [880, 691, 926, 689, 1017, 691, 1079, 684, 1098, 678, 1110, 715, 1126, 762, 1100, 770, 1037, 781, 921, 780, 818, 781, 819, 741, 820, 689] },
            { title: 'nftfeature', coords: [542, 690, 588, 688, 679, 690, 786, 689, 813, 690, 811, 741, 811, 784, 785, 781, 693, 783, 585, 783, 480, 780, 481, 740, 482, 688] },
            { title: 'gameDashboard', coords: [553, 6, 599, 4, 690, 6, 797, 5, 933, 5, 933, 45, 932, 94, 805, 93, 704, 93, 594, 93, 495, 96, 494, 56, 493, 4] },
            { title: 'wallet', coords: [279, 17, 311, 10, 354, 3, 403, 4, 482, 1, 485, 53, 486, 96, 451, 95, 391, 96, 321, 98, 295, 105, 275, 54, 263, 21] },
        ];




        let images = [];
        areas.map((val, key) => {
            images.push(val.title);
        })
        const wrapper = document.querySelector('.imagemap');

        areas.forEach((area) => {
            const coords = area.coords;
            document.addEventListener('mousemove', () => {
                // console.log(area.title, document.getElementsByClassName(`area-${area.title}`))
                const elems = document.getElementsByClassName(`area-${area.title}`);
                if (elems.length) {
                    Array.from(elems).forEach(element => {
                        // console.log(element)
                        if (element) {
                            element.addEventListener('click', handleButton)
                        }
                    })
                }

            })
            // Separate even and odd coordinates
            let even = [];
            let odd = [];

            for (let i = 0; i < coords.length; i++) {
                if (i % 2 === 0) {
                    even.push(coords[i]);
                } else {
                    odd.push(coords[i]);
                }
            }

            const newCoords = [];
            for (let i = 0; i < even.length; i++) {
                newCoords.push(even[i], odd[i]);
            }

            let left, top, width, height;

            if (newCoords.length === 26) {
                // Handle polygonal areas with 12 coordinates
                const xCoords = [];
                const yCoords = [];
                for (let i = 0; i < newCoords.length; i += 2) {
                    xCoords.push(newCoords[i]);
                    yCoords.push(newCoords[i + 1]);
                }

                const minX = Math.min(...xCoords);
                const minY = Math.min(...yCoords);
                const maxX = Math.max(...xCoords);
                const maxY = Math.max(...yCoords);

                left = ((minX / imagewidth) * 100).toFixed(2);
                top = ((minY / imageheight) * 100).toFixed(2);
                width = (((maxX - minX) / imagewidth) * 100).toFixed(2);
                height = (((maxY - minY) / imageheight) * 100).toFixed(2);
            } else {
                console.error(`Invalid coordinates for area: ${area.title}`);
                return;
            }

            wrapper.innerHTML += `<button title="${area.title}" value="${area.title}" class="area area-${area.title} z-30" id="area ${area.title}" style="left: ${left}%; top: ${top}%; width: ${width}%; height: ${height}%;" ></button>`;

        });
    }, []);

    return (
        <div className="justify-center" style={{ display: 'flex', paddingTop: '8em', paddingBottom: '10em' }}>
            <div className="imagemap ">
                {/* PILL DATA */}
                <div>
                    <PillData val={midData} />
                </div>
                {/* PILL DATA END */}
                <div id="get">
                    <img id="YourImage" src={bgArea} className='relative z-20' alt="Your Image" />
                </div>

            </div>
        </div>
    );
};

export default Test;


// Coordinates for the Area

{/* <area shape="poly" coords="1134,760,1120,722,1104,678,1149,655,1212,606,1255,551,1276,502,1287,467,1369,497,1347,559,1304,635,1257,684,1196,731" href="#tokenroom" alt="tokenroom">
    <area shape="poly" coords="1369,493,1324,473,1288,463,1296,404,1294,359,1285,318,1276,287,1268,266,1303,249,1345,223,1363,272,1380,335,1381,422" href="#staking" alt="staking">
        <area shape="poly" coords="1343,218,1303,239,1267,260,1220,187,1179,151,1135,121,1096,106,1069,100,1073,70,1077,8,1168,38,1233,79,1297,142" href="#launchpad1" alt="launchpad1">
            <area shape="poly" coords="1072,6,1067,50,1063,99,1041,95,1009,94,971,96,960,94,940,94,939,64,940,33,942,2,994,4,1036,4" href="#cex" alt="cex">
                <area shape="poly" coords="99,319,92,351,89,391,89,402,60,399,18,396,5,394,5,358,9,324,17,290,26,259,68,279,107,295" href="#dex" alt="dex">
                    <area shape="poly" coords="92,429,105,489,145,568,174,607,200,631,154,707,89,644,49,578,27,530,14,481,3,403,46,405,92,405" href="#launchpad2">
                        <area shape="poly" coords="222,645,255,665,337,689,418,691,475,692,474,739,473,782,352,782,268,765,207,742,160,709,180,672,204,633" href="#p2pmarket" alt="p2pmarket">
                            <area shape="poly" coords="880,691,926,689,1017,691,1079,684,1098,678,1110,715,1126,762,1100,770,1037,781,921,780,818,781,819,741,820,689" href="#nftmarket" alt="nftmarket">
                                <area shape="poly" coords="542,690,588,688,679,690,786,689,813,690,811,741,811,784,785,781,693,783,585,783,480,780,481,740,482,688" href="#nftfeature" alt="nftfeature">
                                    <area shape="poly" coords="553,6,599,4,690,6,797,5,933,5,933,45,932,94,805,93,704,93,594,93,495,96,494,56,493,4" href="#gameDashboard" alt="gameDashboard">
                                        <area shape="poly" coords="279,17,311,10,354,3,403,4,482,1,485,53,486,96,451,95,391,96,321,98,295,105,275,54,263,21" href="#wallet" alt="wallet">
                                            <area shape="poly" coords="49,206,89,140,135,92,182,58,256,20,276,69,292,107,248,124,179,175,141,222,106,291,65,273,28,252" href="#inventory" alt="inventory"></area> */}