import { useState, useEffect } from "react";
import { useAppContext } from "../../../context/AppContext";

export default function About() {
  const data = [
    {
      hash: 'gameDashboard',
      title: 'Gamedashboard',

    },
    {
      hash: 'cex',
      title: 'Cex',


    },
    {
      hash: 'launchpad1',
      title: 'Launchpad',

    },
    {
      hash: 'staking',
      title: 'Staking',


    },
    {
      hash: 'tokenroom',
      title: 'Token Room',


    },
    {
      hash: 'nftmarket',
      title: 'NFT Market',

    },
    {
      hash: 'nftfeature',
      title: 'NFT Features',

    },
    {
      hash: 'p2pmarket',
      title: 'P2P Market',

    },
    {
      hash: 'launchpad2',
      title: 'Launchpad',


    },
    {
      hash: 'dex',
      title: 'Dex',


    },
    {
      hash: 'inventory',
      title: 'Inventory',

    },
    {
      hash: 'wallet',
      title: 'Wallet',

    },
  ];
  const [midData, setMidData] = useState(data);
  const { filteredData, setFilteredData } = useAppContext();
  const [toggleBg, setToggleBg] = useState(false);


  // useEffect(() => {
  //   localStorage.setItem('midData' , JSON.stringify(data));
  // },[]);

  useEffect(() => {
    // const storedData = localStorage.getItem('midData');
    setMidData(data);
  }, []);

  function handleToggle() {
    setToggleBg((prev) => !prev);
  }

  function handleButton(name) {
    const val = data.filter(val => val.hash === name)[0];
    setFilteredData(val);
    console.log(val);
  }


  return [midData, handleButton, toggleBg, handleToggle];
}
