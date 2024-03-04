import Facebook from "../../../assets/icons/facebook.png";
import Twitter from "../../../assets/icons/twitter.png";
import Telegram from "../../../assets/icons/telegram.png";
import Discord from "../../../assets/icons/discord.png";
import Linkedin from "../../../assets/icons/linkedin.png";
import FooterNav from '../mobileView/footer/index'

function Bottom() {
  return<>

  {/* MOB FOOTER */}
  <div id="footer-bottom-mob" className="relative z-100">
      <FooterNav />
    </div>
    {/* MAIN FOOTER */}
    <div id="footer-bottom-main" className="flex flex-col bg-app-black 2xl:px-20 xl:px-16 lg:px-12 md:px-9 sm:px-6 px-3 xl:pt-16 lg:pt-12 md:pt-9 sm:pt-6 pt-3 xl:pb-8 lg:pb-6 md:pb-4 pb-3 mt-10 text-white">
      <div className="grid xl1:grid-cols-6 md1:grid-cols-3 2xs:grid-cols-2 grid-cols-1 2xl:mb-20 xl:mb-16 lg:mb-12 md:mb-9 sm:mb-6 mb-3 gap-10">
        <div className="flex flex-col">
          <ul className="text-xl font-semibold xl:mb-6 md:mb-4 mb-2">
            About Us
          </ul>
          <ul className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <li>Contact Us</li>
            <li>Copyright</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="text-xl font-semibold xl:mb-6 md:mb-4 mb-2">
            Products
          </ul>
          <ul className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <li>NFT</li>
            <li>Token</li>
            <li>Buy Crypto</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="text-xl font-semibold xl:mb-6 md:mb-4 mb-2">
            Service
          </ul>
          <ul className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <li>Staking</li>
            <li>Trade</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="text-xl font-semibold xl:mb-6 md:mb-4 mb-2">
            Support
          </ul>
          <ul className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-semibold xl:mb-6 md:mb-4 mb-2 text-app-blue-500 hover:cursor-pointer active:text-indigo-700">
            Investors
          </div>
          <div className="text-xl font-semibold xl:mb-6 md:mb-4 text-app-blue-500 hover:cursor-pointer active:text-indigo-700">
            Investors Portal
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-semibold xl:mb-6 md:mb-4 mb-2">
            Community
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-9">
              <a rel="facebook" href="https://www.facebook.com/PixpelPlatform/">
                <img
                  src={Facebook}
                  title="pixpel_facebook"
                  alt="facebook"
                  className="w-7 rounded-full"
                />
              </a>
              <a rel="twitter" href="https://twitter.com/PixpelPlatform">
                <img src={Twitter} alt="twitter" className="w-7 rounded-full" title="pixpel_twitter" />
              </a>
              <a rel="telegram" href="https://t.me/pixpel">
                <img
                  src={Telegram}
                  title="pixpel_telegram"
                  alt="telegram"
                  className="w-7 rounded-full"
                />
              </a>
            </div>
            <div className="flex gap-9">
              <a rel="discord" href="https://discord.gg/wgHYhj6DKX">
                <img src={Discord} alt="discord" className="w-7 rounded-full" title="pixpel_discord" />
              </a>
              <a
                rel="linkedin"
                href="https://www.linkedin.com/company/81952738/"
              >
                <img
                  src={Linkedin}
                  alt="linkedin"
                  title="pixpel_linkedin"
                  className="w-7 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-t-2 border-gray-500 justify-center items-center gap-2">
        <div className="flex mt-5 gap-2">
          <div className="text-lg">PIXPEL</div>
          <svg
            className="w-5 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <path d="M14.5 9a3.5 4 0 1 0 0 6" />
          </svg>
          <div className="text-xl">2022</div>
        </div>
        <div className="text-gray-400 text-base">
          By Pixpel Trading S.A. de C.V.
        </div>
      </div>
    </div>
 </>
}

export default Bottom;
