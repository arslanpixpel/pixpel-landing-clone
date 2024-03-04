import ServiceItem from "../../../components/items/serviceitem";
import { itemList } from "./itemlist";
import "../../../App.scss";

function Service() {
  return (
    <>
      <div id="services" className="service-bg min-h-screen">
        <div className="flex flex-col py-28 items-center">
          <h2 className="text-white font-semibold   divider-bottom">
            Our Services
          </h2>
          <div className="border-b-1 w-24 mb-2 mt-3 text-white"></div>
          <h6 className="text-white text-md font-normal mb-5 pb-5">
            Providing everything you need
          </h6>
          <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-flow-row gap-12 justify-center px-8 md:px-18 lg:px-24 xl:px-36 3xl:px-48">
            {itemList.map((item, idx) => {
              return (
                <div className="justify-self-center w-full" key={idx}>
                  <div className="flex flex-col">
                    <div className="flex flex-col h-56 items-center justify-center">
                      <img
                        src={`${item.imageurl}`}
                        alt={item.imagename}
                        title={item.title}
                      />
                    </div>
                    <ServiceItem title={item.title} content={item.content} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
