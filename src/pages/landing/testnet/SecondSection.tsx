import React, { useEffect, useState } from "react";
import FirstTag from "../../../assets/testnet-img/JointheexclusiveTest-Net.svg";
import SecondTag from "../../../assets/testnet-img/launchpad.svg";
import ThirdTag from "../../../assets/testnet-img/Howtobeapartofthetestnetevent_.png";
import Vector from "../../../assets/testnet-img/Vector(1).png";
import Rect from "../../../assets/testnet-img/Rectangle3.png";
import launchpad from "../../../assets/testnet-img/LaunchpadText.svg";
import dex from "../../../assets/testnet-img/DEX.svg";
import we from "../../../assets/testnet-img/pixp-reserve.svg";
import one from "../../../assets/testnet-img/one.png";
import two from "../../../assets/testnet-img/two.png";
import three from "../../../assets/testnet-img/three.png";
import four from "../../../assets/testnet-img/four.png";
import bg from "../../../assets/testnet-img/FrameBg.png";
import If from "../../../assets/testnet-img/if.svg";
import reg from "../../../assets/testnet-img/reg.svg";
import user from "../../../assets/testnet-img/user.svg";
import axios from "axios";
import { Link } from "react-router-dom";

type Props = {};

const arr: [] | any = [
  {
    img: one,
    title: "Create a Concordium wallet ",
    link: "https://www.concordium.com/wallet",
  },
  {
    img: two,
    title: "Connect it with Pixpel: DEX & Launchpad",
    link: "",
  },
  {
    img: three,
    title: "Join our Discord ",
    link: "https://discord.gg/wgHYhj6DKX",
  },
  {
    img: four,
    title: "Contribute and Get Rewarded!",
    link: "",
  },
];

const SecondSection = (props: Props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [otp, setOtp] = useState("");
  const [userExist, setUserExist] = useState(false);
  const [validUser, setValidUser] = useState("");

  const [showVerificationCodeInput, setShowVerificationCodeInput] =
    useState(false);
  const [verified, setVerified] = useState(false);
  const [userform, setUserform] = useState(false);

  useEffect(() => {
    const truth = localStorage.getItem("truth");
    const check = localStorage.getItem("user");
    if (truth === "yes") {
      if (check) {
        setValidUser(check);
        setUserExist(true);
        setVerified(true);
      } else {
        setUserExist(false);
      }
    }
  }, []);
  console.log(username);
  // const isValidEmail = (email: any) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (emailRegex.test(email))
  //     setValidator?.({
  //       email: true,
  //     });
  // };

  // const isValidUsername = (username: any) => {
  //   const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;

  //   if (usernameRegex.test(username))
  //     setValidator?.({
  //       username: false,
  //     });
  // };

  const handleVerifyCode = () => {
    if (verificationCode === otp) {
      axios
        .post("https://api.pixpel.io/api/v1/testnet/submit", {
          email: email,
          username: username,
          walletAddress: walletAddress,
        })
        .then((res: any) => {
          alert(res.data.message);
          setVerified(true);
          localStorage.setItem("user", username);
          localStorage.setItem("truth", "yes");
        })
        .catch((e: any) => {
          alert("Error");
          console.log(e.message);
        });
    } else {
      alert("Wrong OTP");
    }
  };

  const handleVerifyEmail = async () => {
    const check = localStorage.getItem("user");
    if (!check) {
      try {
        const response = await axios.get(
          `https://api.pixpel.io/api/v1/testnet/user/${username}`
        );
        const name = response.data;
        console.log(name, "Name");

        if (name.success === true) {
          alert(`This user is already registered. Please try another one.`);
          return;
        }
      } catch (e) {
        console.log(e);
      }

      console.log("Not registered");

      setLoading(true);
      setTimeout(() => {
        setLoading(false);

        axios
          .post("https://backend.pixpel.io/email/send-otp", {
            email: email,
          })
          .then((res: any) => {
            setOtp(res.data.otp);
            alert(`Verification code sent to your email: ${email}`);
            setShowVerificationCodeInput(true);
          })
          .catch((e: any) => {
            console.log("Error: ", e);
          });
      }, 2000);
    } else {
    }
  };

  const handlejoin = async () => {
    const check = localStorage.getItem("user");
    if (!check) {
      axios
        .get(`https://api.pixpel.io/api/v1/testnet/user/${username}`)
        .then((res: any) => {
          console.log(res);
          setShowVerificationCodeInput(true);
          axios
            .post("https://backend.pixpel.io/email/send-otp", {
              email: res.data.user.email,
            })
            .then((res: any) => {
              setOtp(res.data.otp);

              alert(`Verification code sent to your email`);
            })
            .catch((e: any) => {
              console.log("Error: ", e);
            });
        })
        .catch((e: any) => {
          alert("User Not Found");
          console.log(e, "responce");
        });
    } else {
      setUsername(check);
    }
  };

  return (
    <div>
      {/* TAG SECTION */}
      <div className="pt-32 px-4">
        <div className="flex justify-center w-100">
          <img src={FirstTag} alt="" />
        </div>
        <div className="flex justify-center w-100">
          <img src={SecondTag} alt="" />
        </div>
        <div className="flex justify-center w-100 mt-20">
          <img src={ThirdTag} alt="" />
        </div>
        <div className="flex justify-center w-100 mt-8">
          <img src={Vector} alt="" />
        </div>
      </div>
      {/* List Section */}
      <div className="flex justify-center px-4">
        <div className="flex-wrap">
          {arr.map((val: any, key: any) => {
            return (
              <>
                <div className="flex wrapper py-10">
                  <div>
                    <div
                      className="!bg-center inline-flex !bg-contain !bg-no-repeat xl1:flex"
                      style={{ background: `url(${bg})` }}
                    >
                      <img
                        src={val.img}
                        alt={`${key}-img`}
                        className="p-3 relative left-2 w-[65px] h-[80px] xl1:!w-auto xl1:!h-auto xl1:!p-5"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="flex-wrap px-3 text-white font-poppins font-medium WordsSize text-md xl1:text-[36px]">
                      {val.title}
                      <a
                        className="text-[#5ED5FE] px-1"
                        href={val.link ? val.link : "#"}
                      >
                        {val.link}
                      </a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* Button Section */}
      <div
        id="bigBorder"
        className="bg-no-repeat bg-center rounded-[4em] bg-inherit xl1:bg-cover m-[0.7em] lg:m-[3em]"
        style={{ border: "solid #fff 2px" }}
      >
        <div
          id="smallBorder"
          className="flex centerTheseBtns bg-center bg-no-repeat py-32 w-full justify-center"
        >
          {!validUser && !verified ? (
            <div
              className="flex flex-col rounded-3xl p-10 w-full m-[0.7em] lg:m-[3em]"
              style={{ border: "solid #fff 2px" }}
            >
              {!userform ? (
                <div className="flex flex-col gap-4">
                  <div className="flex centerTheseBtns justify-center">
                    <img src={If} className="lg:py-10 lg:px-3" alt="img" />
                    {/* <p
                      className=" lg:text-2xl cursor-pointer font-extrabold text-center uppercase text-blue-800 ml-2"
                      onClick={() => {
                        setUserform(true);
                      }}
                    >
                      CLICK HERE
                    </p> */}
                  </div>
                  <input
                    className="bg-transparent border-white border-2 py-5 rounded-full h-20 px-6 w-[100%]  lg:text-2xl text-white text-Poppins xl1:p-[50px]"
                    placeholder="  Enter your username"
                    value={username}
                    onChange={(e) => {
                      const newValue = e.target.value.replace(/\s/g, "");
                      setUsername(newValue);
                    }}
                    required
                  />
                  <input
                    className={`${
                      showVerificationCodeInput ? "" : "hidden"
                    } bg-transparent border-white border-2 py-5 rounded-full h-20 px-6 w-[100%]  lg:text-2xl text-white text-Poppins xl1:p-[50px]`}
                    placeholder="  Enter your OTP"
                    value={verificationCode}
                    onChange={(e) => {
                      setVerificationCode(e.target.value);
                    }}
                    required
                  />
                  <div className="text-center">
                    <button
                      className={`py-[1.7rem] ${
                        !showVerificationCodeInput ? "" : "hidden"
                      } w-[25%] HoverMeBtn1 mt-10  px-[4rem] text-1xl font-bold text-white font-Poppins rounded-[40px] disabled:opacity-50 ${
                        username ? "cursor-pointer" : "cursor-not-allowed"
                      }`}
                      style={{
                        background: `linear-gradient(#44DEA2, #13AD70)`,
                      }}
                      onClick={() => {
                        if (username) {
                          handlejoin();
                          return;
                        }
                        alert("Please enter Username");
                      }}
                      disabled={!username}
                    >
                      Send Otp
                    </button>
                    <button
                      className={`py-[1.7rem] ${
                        showVerificationCodeInput ? "" : "hidden"
                      } w-[25%] HoverMeBtn1 mt-10  px-[4rem] text-1xl font-bold text-white font-Poppins rounded-[40px] disabled:opacity-50 ${
                        username ? "cursor-pointer" : "cursor-not-allowed"
                      }`}
                      style={{
                        background: `linear-gradient(#44DEA2, #13AD70)`,
                      }}
                      disabled={!verificationCode}
                      onClick={() => {
                        if (otp === verificationCode) {
                          alert("User Verified ✔");
                          setVerified(true);
                          localStorage.setItem("user", username);
                          localStorage.setItem("truth", "yes");
                          return;
                        }
                        alert("Please enter Correct OTP");
                      }}
                    >
                      Join
                    </button>
                  </div>
                  <div className="flex justify-center w-100 mt-20 mb-10">
                    <img src={Vector} alt="" width="408px" />
                  </div>
                  <div className="flex pb-2 pt-2 px-3 justify-center">
                    <img src={reg} alt="reg" />
                  </div>
                  <div className="text-center">
                    <button
                      className={`py-[1.7rem] w-[25%] HoverMeBtn2 mb-10  px-[4rem] text-1xl font-bold text-white font-Poppins rounded-[40px] disabled:opacity-50`}
                      style={{
                        background: `linear-gradient(#5ED5FE, #0196C9)`,
                      }}
                      onClick={() => {
                        setUserform(true);
                      }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex centerTheseBtns justify-center">
                    <img src={user} className="py-10 px-3" alt="img" />
                  </div>
                  <div className="flex flex-col gap-10">
                    <input
                      className="bg-transparent border-white border-2 py-5 rounded-full h-20 px-6 w-[100%]  lg:text-2xl text-white text-Poppins xl1:p-[50px]"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      className="bg-transparent border-white border-2 py-5 rounded-full h-20 px-6 w-[100%]  lg:text-2xl text-white text-Poppins xl1:p-[50px]"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\s/g, "");
                        setUsername(newValue);
                      }}
                      required
                    />
                    <input
                      className="bg-transparent border-white border-2 py-5 rounded-full h-20 px-6 w-[100%]  lg:text-2xl text-white text-Poppins xl1:p-[50px]"
                      placeholder="Enter the Concordium wallet address"
                      type="text"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      required
                    />
                    {showVerificationCodeInput ? (
                      <>
                        <div className="flex flex-col gap-10">
                          <input
                            className="bg-transparent border-white border-2 py-5 rounded-full h-20 px-6 w-[100%]  lg:text-2xl text-white text-Poppins xl1:p-[50px]"
                            placeholder="Enter the verification code"
                            type="text"
                            value={verificationCode}
                            onChange={(e) =>
                              setVerificationCode(e.target.value)
                            }
                          />
                          <div className="text-center">
                            <button
                              className={`py-[1.7rem] disabled:opacity-50 w-[30%] HoverMeBtn1 mt-5 px-[4rem] text-1xl font-bold text-white mb-10 font-Poppins rounded-[40px] ${
                                verificationCode
                                  ? "cursor-pointer"
                                  : "cursor-not-allowed"
                              }`}
                              style={{
                                background: `linear-gradient(#44DEA2, #13AD70)`,
                              }}
                              onClick={() => {
                                if (verificationCode) {
                                  handleVerifyCode();
                                  return;
                                }
                                alert("please Enter verification code");
                              }}
                            >
                              Verify Code
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center">
                        <button
                          className={`py-[1.7rem] disabled:opacity-50 w-[30%] HoverMeBtn1 mt-5 px-[4rem] text-1xl font-bold text-white mb-10 font-Poppins rounded-[40px] ${
                            username && email && walletAddress
                              ? "cursor-pointer"
                              : "cursor-not-allowed"
                          }`}
                          style={{
                            background: `linear-gradient(#44DEA2, #13AD70)`,
                          }}
                          onClick={() => {
                            if (username && email && walletAddress) {
                              handleVerifyEmail();
                              return;
                            }
                          }}
                          disabled={
                            loading || !username || !email || !walletAddress
                          }
                        >
                          {loading ? "Loading..." : "Verify Email"}
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div>
              <div className="flex justify-center w-100 mb-10">
                <img src={launchpad} alt="" />
              </div>
              <div className="flex flex-wrap justify-center">
                {/* <a
                  href="https://launchpad.pixpel.io/"
                  className="py-[1.7rem] HoverMeBtn1 mr-5 px-[6rem] text-1xl font-bold text-white font-Poppins rounded-[28px]"
                  style={{ background: `linear-gradient(#44DEA2, #13AD70)` }}
                >
                  Join as Player
                </a> */}
                <a
                  href={`https://launchpad.pixpel.io/?${
                    username ? username : validUser
                  }`}
                  className="py-[1.7rem] HoverMeBtn1 mr-5 px-[6rem] text-1xl font-bold text-white font-Poppins rounded-[28px]"
                  style={{ background: `linear-gradient(#44DEA2, #13AD70)` }}
                >
                  Join as Player
                </a>

                <Link
                  to={`https://launchpad.pixpel.io/launchpad/developer/?${
                    username ? username : validUser
                  }`}
                  className="py-[1.7rem] HoverMeBtn2 px-[4rem] text-1xl font-bold text-white font-Poppins rounded-[28px]"
                  style={{ background: `linear-gradient(#5ED5FE, #0196C9)` }}
                >
                  Join as Developer
                </Link>
              </div>
            </div>
          )}
        </div>
        {verified && (
          <div>
            {/* Middle Line */}
            <div className="flex justify-center w-100 mb-10">
              <img className="h-[4px]" src={Vector} alt="" width="608px" />
            </div>
            {/* 2nd Button Section */}
            <div className="flex centerTheseBtns bg-center bg-no-repeat pt-10 pb-20 w-full justify-center">
              <div>
                <div className="flex justify-center w-100 mb-10">
                  <img src={dex} className="w-auto 1xl:!w-[50%]" alt="" />
                </div>
                <a
                  href={`https://dex.pixpel.io/swap-master/swap?${
                    username ? username : validUser
                  }`}
                  id="JOIN"
                  className="py-[1.7rem] ml-4 HoverMeBtn1 px-[9rem] text-1xl font-bold text-white mb-20 font-Poppins rounded-[28px]"
                  style={{ background: `linear-gradient(#44DEA2, #13AD70)` }}
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* NOTE SECTION */}
      <div className="flex justify-center px-3 w-100 mb-10">
        <img src={we} alt="" />
      </div>
    </div>
  );
};

export default SecondSection;
