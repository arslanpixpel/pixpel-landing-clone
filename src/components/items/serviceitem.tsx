declare type ServiceItemProps = {
  title: string;
  content: string;
}

function ServiceItem(props:ServiceItemProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl px-8 py-9 gap-4">
      <h3 className="flex text-xl font-semibold h-12 justify-center">
        {props.title}
      </h3>
      <div className="text-base font-normal md:h-52 lg:h-48 xl:h-72 text-center">
        {props.content}
      </div>
    </div>
  );
};

export default ServiceItem;