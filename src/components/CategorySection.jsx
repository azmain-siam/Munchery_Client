import MenuItems from "./MenuItems";
import SectionHeading from "./SectionHeading";
import { Fade } from "react-awesome-reveal";

export default function CategorySection() {
  return (
    <div>
      <Fade direction="up" duration={500}>
        <div className="text-center">
          <SectionHeading
            heading={"Choose & Pick"}
            subHeading={"From Our Menu"}
          />
        </div>
        <MenuItems />
      </Fade>
    </div>
  );
}
