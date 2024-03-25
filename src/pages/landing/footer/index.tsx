import "../../../App.scss";
import Footer2 from "../../../assets/images/footer_pixpel.png";
import Footer3 from "../../../assets/images/footer--top.png";

function Footer() {
  return (
    <>
      <div className="footer-bg w-full min-h-screen flex flex-col">
        <div
          id="extra-space-footer-mob"
          className="flex justify-center items-center flex-grow"
        ></div>
        <div className="flex justify-center">
          <img
            alt="footerLightImage"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-duration="1000"
            id="footer-logo"
            data-aos-offset="0"
            className="relative z-10 top-[7vh] w-[637px]"
            src={Footer2}
          />
        </div>
        <div className="flex justify-center">
          <img
            alt="footerBottomImage"
            data-aos="fade-up"
            data-aos-duration="800"
            width="100%"
            data-aos-delay="1000"
            className="relative z-0"
            src={Footer3}
            style={{ backgroundColor: "#1d2630" }}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
