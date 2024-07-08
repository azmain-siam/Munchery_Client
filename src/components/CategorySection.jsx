import { useContext, useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import SectionHeading from "./SectionHeading";
import { Fade } from "react-awesome-reveal";
import { StoreContext } from "../contexts/StoreContext";

export default function CategorySection() {
  const [items, setItems] = useState([]);
  const { loading, setLoading } = useContext(StoreContext);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(false);
  }, [setLoading]);

  return (
    <div>
      <Fade direction="up" duration={500}>
        <div className="text-center">
          <SectionHeading
            heading={"Choose & Pick"}
            subHeading={"From Our Menu"}
          />
        </div>
        <MenuItems foods={items} />
      </Fade>
    </div>
  );
}
