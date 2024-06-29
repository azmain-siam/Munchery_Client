import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="text-black bg-[#FFF6E9] font-outfit ">
      <Navbar />
      <div
        className={`min-h-[calc(100vh-293px)] ${
          location.pathname !== "/" ? "container mx-auto lg:pt-[85px] mb-10" : ""
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
