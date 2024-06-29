import { menuItems } from "../../public/menuItems";
import "swiper/css/bundle";

const MenuItems = () => {
  console.log(menuItems);
  return (
    <div className="flex overflow-x-auto justify-between items-center gap-4 my-11 px-[3%] w-full pb-5">
      {menuItems.map((items, idx) => (
        <div
          key={idx}
          className="size-24 md:size-32 lg:size-36 flex-none group/edit relative rounded-full overflow-hidden cursor-pointer"
        >
          <img
            className="w-full h-full object-cover group-hover/edit:scale-110 duration-300 hover:scale-105"
            src={items.thumbnail}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="flex justify-center items-center h-full absolute top-0 text-lg md:text-2xl font-medium tracking-wide w-full">
            <h3 className="text-accent capitalize">{items.menu}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;

















