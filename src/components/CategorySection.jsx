import MenuItems from "./MenuItems";
import SectionHeading from "./SectionHeading";

export default function CategorySection() {
  return (
    <div>
      <div className="text-center">
        <SectionHeading
          heading={"Choose & Pick"}
          subHeading={"From Our Menu"}
        />
      </div>
      <MenuItems />
    </div>
  );
}
