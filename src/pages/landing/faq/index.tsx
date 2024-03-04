import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { FullscreenLoader } from "../../../components/loader";
import { faqList } from "./faqlist";
import "../../../App.scss";
import ContactNFT from "../../../assets/images/contact-image.png";
import BrightSeperator from "../../../assets/images/Line 309.png";
import FaqUp from "../../../assets/icons/faq_up.png";
import FaqDown from "../../../assets/icons/faq_down.png";
import BubbleImage from '../../../assets/images/Bubbles-FAQ.png';
import bubblesMob from '../../../assets/mobileNav/faq/Bubbles and planet and gradient.png'
import * as emailjs from "emailjs-com";
import AOS from 'aos';
import { Collapse, Button } from 'antd';
import 'aos/dist/aos.css';
import "react-toastify/dist/ReactToastify.css";
const { Panel } = Collapse;
const SERVICE_ID: string = String(process.env.REACT_APP_SERVICE_ID);
const TEMPLATE_ID: string = String(process.env.REACT_APP_TEMPLATE_ID);
const PUBLIC_KEY: string = String(process.env.REACT_APP_PUBLIC_KEY);

declare type FapProps = {
  question: string;
  answer: string;
  id: number;
  handleFaqClicked: any;
};

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 12,
  border: 0,
  overflow: 'hidden',
};
const FaqItem = (props: FapProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Collapse
        bordered={false}
        activeKey={isOpen ? '1' : ''}
        onChange={toggleFaq}
        expandIconPosition="right"
        expandIcon={() => (
          <img
            src={isOpen ? FaqUp : FaqDown}
            alt={isOpen ? 'open' : 'closed'}
            className="faq-toggle"
          />
        )}
        style={customPanelStyle}
        className="cutom-tab-panel"
      >
        <Panel header={<span id="FAQ-Toggle-Heading" className="text-[20px] leading-normal font-semibold">{props.question}</span>} key="1" style={customPanelStyle}>
          <div id="FAQ-Toggle-Data" className="text-black flex openitem-bg text-base font-light py-2 px-2 rounded-lg !w-[100%]">{props.answer}</div>
        </Panel>
      </Collapse>
    </div>
  );
};


function Faq() {
  const context = useAppContext();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    from_name: "",
    message: "",
  });

  const handleFaqClicked = (id: number) => {
    let _faqStatus: boolean[] = [false, false, false, false];
    for (let i = 0; i < context.faqStatus.length; i++) {
      if (id === i) {
        _faqStatus[i] = !context.faqStatus[i];
      }
    }

    context.setFaqStatus(_faqStatus);
  };

  const ValidateEmail = (mail: any) => {
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) return true;
    else return false;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (values.message === "") {
      toast.error("Please fill the message.");
      return;
    }

    if (!ValidateEmail(values.from_name)) {
      toast.warning("Incorrect email.");
      return;
    }

    setLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
      function (response) {
        console.log(
          "email send response >>>>>>",
          response.status,
          response.text
        );
        setLoading(false);
        toast.success("Successfully submitted.");
      },
      function (err) {
        console.log("email send error >>>>>>", err);
        setLoading(false);
        toast.error("Error connection");
      }
    );
  };

  const handleChange = (e: any) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <ToastContainer />
      {loading === true && <FullscreenLoader msg="Loading" />}
      <div className="" id="faq">
        {context.clickedContact ? (
          <div className="contact-bg min-h-screen w-full">
            <div className="show flex flex-col-reverse md:flex-row mx-auto w-full gap-8 py-28 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48">
              <div className="w-full md:w-2/5">
                <div className="flex flex-col gap-8 mx-auto my-auto">
                  <div className="text-white text-6xl font-semibold text-decoration-line: none;">
                    We´d love to hear from you
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white h-9 px-2">
                    <input
                      placeholder="Email"
                      type="text"
                      onChange={(e) => handleChange(e)}
                      value={values.from_name}
                      name="from_name"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-white h-36 px-2">
                    <textarea
                      placeholder="Your message"
                      onChange={(e) => handleChange(e)}
                      cols={100}
                      className="h-32"
                      name="message"
                      value={values.message}
                    ></textarea>
                  </div>
                  <div className="flex flex-col tiny:flex-row gap-4">
                    <button
                      className="w-full subscribe-btn text-white h-12 mx-auto"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Send
                    </button>
                    <button
                      className="w-full subscribe-btn text-white h-12 mx-auto"
                      onClick={() => context.setClickedContact(false)}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <img
                  src={ContactNFT}
                  alt="contact_nft"
                  className="w-full mx-auto"
                  title="contactNFT"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="faq-bg min-h-screen flex items-center">
            <div>
              <img id="img-faq-normal" src={BubbleImage} className="bubbles absolute mt-[-14em] w-[100%]" alt="BubbleImage" />
              {/* <img src={bubblesMob} className="absolute w-[100%]"  /> */}
            </div>
            <div className="relative flex mx-auto  px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48 py-12 items-center justify-center text-white">
              <div className="flex  flex-col items-center gap-8 w-full mb-8">
                <div className="flex items-center w-full justify-center">
                  <div id="FAQ-Heading" className="flex font-semibold text-5xl " data-aos="fade-down">
                    Have more questions?
                  </div>
                </div>
                <img
                  src={BrightSeperator}
                  alt="brightSeperator"
                />
                <div className="flex flex-col w-full lg:w-3/5">
                  {faqList.map((dt, idx) => {
                    return (
                      <FaqItem
                        {...dt}
                        key={idx}
                        id={idx}
                        handleFaqClicked={handleFaqClicked}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Faq;
