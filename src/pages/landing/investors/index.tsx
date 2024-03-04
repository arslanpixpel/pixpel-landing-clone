import { useState } from "react";
import "../../../App.scss";
import man from "../../../assets/images/man.png";
import key from "../../../assets/images/key.png";

function Investors() {
  const [text, setText] = useState("Invest wisely with Pixpel's top rated and award - winning platform");
  const [className, setClassName] = useState("hidden");
  const [reverse, setReverse] = useState("");

  const handleRegisterClick = async () => {
    setText("New to Pixpel? Create your account");
    setClassName("flex")
    setReverse("flex-row-reverse");
  }

  const handleSigninClick = async () => {
    setText("Invest wisely with Pixpel's top rated and award - winning platform");
    setClassName("hidden")
    setReverse("flex-row");
  }

  return (
    <>
      <div id="investors" className="investors-bg min-h-screen">
        <div className="show flex flex-col xl:w-2/5 md:w-3/5 w-full py-28 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48">
          <div className="text-3xl text-white font-bold mb-6">Sign In</div>
          <div className="text-white leading-loose text-lg mb-12">
            {text}
          </div>
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex">
              <div className="w-10 z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                <img src={man} alt="man" className="h-6 w-5" title="man" />
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-16 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-500"
                placeholder="Username"
              />
            </div>
            <div className="flex">
              <div className="w-10 z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                <img src={key} alt="key" className="h-6 w-5" title="key" />
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-16 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-500"
                placeholder="Password"
              />
            </div>
            <div className={className}>
              <div className="w-10 z-10 pl-3 text-center pointer-events-none flex items-center justify-center">
                <img src={key} alt="key" className="h-6 w-5" title="key" />
              </div>
              <input
                type="text"
                className="w-full -ml-10 pl-16 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-500"
                placeholder="Confrim Password"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-between -mt-2">
              <div className="flex gap-2">
                <input type="checkbox" />
                <div className="text-white">Remeber me</div>
              </div>
              <div className="italic text-white">Forgot password?</div>
            </div>
          </div>
          <div className={"flex gap-6 " + reverse}>
            <div className="flex flex-col bg-app-blue-500 py-2 px-4 w-1/2 rounded-full justify-center items-center my-auto mx-auto text-white h-12 mt-8 hover:cursor-pointer" onClick={() => handleSigninClick()}>
              Sign In
            </div>
            <div className="flex flex-col bg-app-green py-2 px-4 w-1/2 rounded-full justify-center items-center my-auto mx-auto text-white h-12 mt-8 hover:cursor-pointer" onClick={() => handleRegisterClick()}>
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investors;
