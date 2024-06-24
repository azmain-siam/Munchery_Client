import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="text-black bg-[#FFF6E9] font-outfit">
      <Navbar />
      <div className="min-h-[calc(100vh-359px)] pt-[70px] mb-[500px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
