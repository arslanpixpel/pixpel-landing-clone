import { useCallback, useState } from "react";
import Logo from "../../assets/logo/logo.svg";
import "../../App.scss";
import { Dropdown, Menu, Space } from "antd";
import HamBurger from "../../assets/mobileNav/Hamburger-Menu.png";
import HamBurgerCross from "../../assets/mobileNav/Hamburger-Cross.png";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const firstRedirection = useCallback(() => {
    window.open("https://docsend.com/view/p26a9bvfpqf52ddi");
  }, []);

  const windowTwo = useCallback(() => {
    window.open("https://docsend.com/view/q83qhhu6h66ckvgk");
  }, []);

  const items = (
    <Menu className="!bg-[#37404C] !px-[30px]">
      <Menu.Item
        key="White Paper"
        className="!text-[#FFF] menu"
        onClick={firstRedirection}
      >
        White Paper
      </Menu.Item>
      <Menu.Item
        key="Check deck"
        className="!text-[#FFF] menu"
        onClick={windowTwo}
      >
        Check Deck
      </Menu.Item>
      <Menu.Item key="News" className="!text-[#FFF] menu">
        News
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <header className="fixed flex w-full justify-between items-center h-24 header-bg top-0 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 z-20">
        <a href="/" rel="PIXPEL">
          <img src={Logo} alt="logo" className="w-40" title="logo" />
        </a>
        {/* Mobile NAV */}

        <div className="mob-screen-nav rotate-180 items-center top-[10vh] z-10 p-2 bg-none">
          <button onClick={toggleNav}>
            <img src={isNavOpen ? HamBurgerCross : HamBurger} alt="Open Menu" />
          </button>
        </div>
        <div
          style={{ backgroundColor: "#1d2630" }}
          id="list-mob-div"
          className={`mob-screen-nav fixed h-[80vh] right-[0vw] top-[15%] w-[100%] flex justify-center ${
            isNavOpen ? "w-full dropdownContent" : "pullUpContent w-full hidden"
          }`}
        >
          {/* <button
        className="fixed top-[-3.5rem] right-8 z-10  p-2 "
        onClick={toggleNav}
      >
        <img src={HamBurgerCross} alt="Close Menu" />
      </button> */}
          <ul
            className={`py-6 text-white w-100 text-center font-poppins text-18.081 font-bold mx-auto `}
          >
            <li className="p-2">
              <a
                // onClick={() => {
                //   setIsNavOpen((prev) => !prev);
                //   console.log("header is open");
                // }}
                href="https://home.pixpel.io/"
              >
                Home
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#team"
              >
                Team
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#tokenomics"
              >
                Tokenomics
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#road-head"
              >
                Roadmap
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#partners"
              >
                Partners
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#investors"
              >
                Investors
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="#faq"
              >
                FAQ
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="https://docsend.com/view/p26a9bvfpqf52ddi"
              >
                White Paper
              </a>
            </li>
            <li className="p-2">
              <a
                onClick={() => {
                  setIsNavOpen((prev) => !prev);
                }}
                href="https://docsend.com/view/q83qhhu6h66ckvgk"
              >
                Check Deck
              </a>
            </li>
          </ul>
        </div>
        {/* MOBILE NAV End */}
        {/* NORMAL NAV*/}
        <div className="navBar main-screen-nav hidden md:flex gap-4 border-1 items-center justify-center border-blue rounded-full px-4 py-2px">
          <div className="items-center text-white cursor-pointer text-[20px] font-medium  hover:text-app-green">
            <a href="https://home.pixpel.io/">Home</a>
          </div>
          <div
            className="items-center text-white cursor-pointer text-[20px] font-medium  hover:text-app-green"
            onClick={() => setNavbarOpen(false)}
          >
            <a href="#about">About</a>
          </div>
          <div
            className="items-center text-white cursor-pointer text-[20px] font-medium  hover:text-app-green"
            onClick={() => setNavbarOpen(false)}
          >
            <a href="#team">Team</a>
          </div>
          <div
            className="items-center text-white cursor-pointer text-[20px] font-medium  hover:text-app-green"
            onClick={() => setNavbarOpen(false)}
          >
            <a href="#token">Tokenomics</a>
          </div>
          <div
            className="items-center text-white cursor-pointer text-[20px] font-medium  hover:text-app-green"
            onClick={() => setNavbarOpen(false)}
          >
            <a href="#roadmap">Roadmap</a>
          </div>
          <div
            className="items-center text-white cursor-pointer text-[20px] font-medium  hover:text-app-green"
            onClick={() => setNavbarOpen(false)}
          >
            <a href="#partners">Partners</a>
          </div>
          <div
            className="items-center text-white cursor-pointer text-[20px] font-medium   hover:text-app-green"
            onClick={() => setNavbarOpen(false)}
          >
            <a href="#faq">FAQ</a>
          </div>

          <Dropdown overlay={items} placement="bottom" arrow>
            <Space
              className="ant-dropdown-link text-white cursor-pointer text-[20px] font-medium flex- flex-row hover:text-app-green"
              onClick={(e) => e.preventDefault()}
            >
              More
              <svg
                className="mt-1 ml-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Space>
          </Dropdown>
          {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <button className="
                flex justify-between items-center text-sm2 w-full text-white"
              onClick={() => { setNavbarOpen(!navbarOpen); }}
            >
              More
              <svg className="mt-1 ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
              </svg>
            </button>
            {
              navbarOpen && (
                <div className="absolute flex flex-row-reverse justify-end bg-w w-32 mt-1 rounded-b-xl bg-[#37404C]">
                  <ul>
                      <li onClick={ () => setNavbarOpen(!navbarOpen) }>
                        <a href="https://docsend.com/view/p26a9bvfpqf52ddi" target="_blank" className="block py-2 px-2 hover:text-app-green" rel="noreferrer">White Paper</a>
                      </li>
                      <li onClick={ () => setNavbarOpen(!navbarOpen) }>
                        <a href="https://docsend.com/view/q83qhhu6h66ckvgk" target="_blank" className="block py-2 px-2 hover:text-app-green" rel="noreferrer">Check Deck</a>
                      </li>
                      <li onClick={ () => setNavbarOpen(!navbarOpen) }>
                        <a href="#"  className="block py-2 px-2 hover:text-app-green" rel="noreferrer">News</a>
                      </li>
                    </ul>
                  <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <Button>bottomRight</Button>
                  </Dropdown>
                </div>
              )
            }
          </li>
        </ul> */}
        </div>
      </header>
    </>
  );
}

export default Header;
