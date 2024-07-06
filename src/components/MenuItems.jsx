import { useEffect, useState } from "react";
import { menuItems } from "../../public/menuItems";
import "swiper/css/bundle";

const MenuItems = () => {
  const [item, setItem] = useState("All");
  console.log("item", item);

  const handleClickItem = async (selectedItem) => {
    console.log("selectedItem", selectedItem);
    setItem(selectedItem);

    // if (selectedItem !== item) {
    //   setItem(selectedItem);
    // }
    console.log("after", item);
  };

  return (
    <div className="flex overflow-x-auto justify-between items-center gap-4 my-11 px-[3%] w-full pb-5">
      {menuItems.map((items, idx) => (
        <div
          onClick={() => setItem(prev=>prev === items.menu)}
          key={idx}
          className={`size-24 md:size-32 lg:size-36 flex-none group/edit relative rounded-full overflow-hidden cursor-pointer ${
            items.menu === item
              ? "border-[6px] border-primary duration-100"
              : ""
          }`}
        >
          <img className="w-full h-full object-cover" src={items.thumbnail} />
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