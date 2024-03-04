import yahoo from "../../../assets/images/Yahoo.png";
import tcu from "../../../assets/images/TCU.png";
import europaPess from "../../../assets/images/europa_press.png";
import imgWholeMob from '../../../assets/mobileNav/press-release/Press-Release.svg'

function Release() {
  return <>
    {/* MOBILE */}
    <div id="release-mob" className="w-[100%] mt-[-10vh] absolute">
      <img src={imgWholeMob} className="w-[100%] relative" />
    </div>
    {/* NORMAL */}
    <div id="release-main"  className="flex flex-col gradientbackground-release w-full py-20 items-center relative">
      <div className="text-3xl font-semibold mb-8 border-b-4 text-white">
        Press Release
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 items-center mb-10  ">
        <a
          href="https://finance.yahoo.com/news/pixpel-concordium-bring-insurance-policy-074600622.html"
          rel="yahoo"
        >
          <img src={yahoo} alt="yahoo" title="yahoo" />
        </a>
        <a
          href="https://www.europapress.es/comunicados/internacional-00907/noticia-comunicado-pixpel-and-concordium-bring-insurance-policy-to-web-30-gaming-20220913094734.html"
          rel="Europa"
        >
          {/* <div className="text-3xl font-bold text-white">europa press</div> */}
          <img src={europaPess} alt="europaPess" title="europaPess" />
        </a>
        <a
          href="https://www.thecryptoupdates.com/many-p2e-problems-one-solution-pixpel/"
          rel="TCU"
        >
          <img src={tcu} alt="tcu" title="tcu" />
        </a>
      </div>
    </div>
  </>;
}

export default Release;
