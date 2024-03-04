import React from "react";
import bgFooter from "../../../assets/testnet-img/Rectangle1.png";
import Frame from "../../../assets/testnet-img/Frame2199.png";
import discord from "../../../assets/mobileNav/footer/discord.svg";
import x from "../../../assets/mobileNav/footer/x.svg";
import insta from "../../../assets/mobileNav/footer/insta.svg";
import linkedin from "../../../assets/mobileNav/footer/linkedin.svg";
import telegram from "../../../assets/mobileNav/footer/telegram.svg";
import medium from "../../../assets/mobileNav/footer/unknown.svg";

type Props = {};

const Footer = (props: Props) => {
  const arr = [
    { img: discord, link: "https://discord.gg/wgHYhj6DKX" },
    { img: x, link: "https://twitter.com/PixpelPlatform" },
    { img: insta, link: "https://www.facebook.com/PixpelPlatform/" },
    { img: linkedin, link: "https://www.linkedin.com/company/81952738/" },
    { img: telegram, link: "https://t.me/pixpel" },
    { img: medium, link: "https://www.medium.com/@Pixpel" },
  ];

  return (
    <div
      className="bg-cover bg-no-repeat p-20"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      <div className="flex belowMe justify-between">
        <a href="https://www.pixpel.io/">
          <img src={Frame} className="mb-5" />
        </a>
        <div className="flex justify-center">
          {arr.map((val, key) => {
            return (
              <>
                <a className="mt-7" href={val.link}>
                  <img
                    src={val.img}
                    className="w-[70px] px-4"
                    key={key}
                    alt="footer-mob-img"
                  />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
