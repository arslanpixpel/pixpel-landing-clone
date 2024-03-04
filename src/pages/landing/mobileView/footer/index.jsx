import React from 'react'
import PixPelImg from '../../../../assets/mobileNav/footer/Pixpel-2023.svg'
import './index.css'
import discord from '../../../../assets/mobileNav/footer/discord.svg'
import x from '../../../../assets/mobileNav/footer/x.svg'
import insta from '../../../../assets/mobileNav/footer/insta.svg'
import linkedin from '../../../../assets/mobileNav/footer/linkedin.svg'
import telegram from '../../../../assets/mobileNav/footer/telegram.svg'
import medium from '../../../../assets/mobileNav/footer/unknown.svg'


const index = () => {
 const arr = [ { img: discord, link: "https://discord.gg/wgHYhj6DKX" },
 { img: x, link: "https://twitter.com/PixpelPlatform" },
 { img: insta, link: "https://www.instagram.com/pixpelplatform?igsh=MXBhbWE0aDNpdnd0ZA==" },
 { img: linkedin, link: "https://www.linkedin.com/company/81952738/" },
 { img: telegram, link: "https://t.me/pixpel" },
 { img: medium, link: "https://www.medium.com/@Pixpel" },]
 return <>
    <div className='w-[100%]  flex justify-center' style={{backgroundColor: "#1f2630 !important"}}>
      <div className='w-[100%] flex justify-center'>
        <img src={PixPelImg} />
      </div>
    </div>
    <div className='border-y-1 py-4 my-4 border-gray-500'>
        <div className='nav-top flex justify-center' >
        <ul className='flex ' style={{listStyle: 'none'}}>
            <li className='px-2'><a href='#about'>About Us</a></li>
            <li className='px-2'><a href='#'>Products</a></li>
            <li className='px-2'><a href='#'>Service</a></li>
            <li className='px-2'><a href='#support'>Support</a></li>
            <li className='px-2'><a href='#'>Whitepaper</a></li>
        </ul>
        </div>
        <div className='nav-bottom py-2 pt-6 flex justify-center'>
        <ul className='flex' style={{listStyle: 'none'}}>
            <li className='px-3' ><a href='#' >Investors</a></li>
            <li className='px-3' ><a href='#' >Investors Portal</a></li>
        </ul>
        </div>
    </div>
    <div className='flex justify-center pb-4'>
      <div className='flex'>
        {arr.map((val , key) => {
          return <>
           <a href={val.link}><img src={val.img} className='px-4' key={key} alt='footer-mob-img' /></a>
          </>
        })}
      </div>
    </div>
  </>
}

export default index