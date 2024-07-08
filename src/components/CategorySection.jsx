import { useContext, useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import SectionHeading from "./SectionHeading";
import { Fade } from "react-awesome-reveal";
import { StoreContext } from "../contexts/StoreContext";
import Loading from "./Loading";

export default function CategorySection() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("All");
  const { loading, setLoading } = useContext(StoreContext);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return (
      <div className="mb-20">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Fade direction="up" duration={500}>
        <div className="text-center">
          <SectionHeading
            heading={"Choose & Pick"}
            subHeading={"From Our Menu"}
          />
        </div>
        <MenuItems
          category={category}
          setCategory={setCategory}
          foods={items}
        />
      </Fade>
    </div>
  );
}
