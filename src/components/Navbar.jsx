import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const navlinks = [
    {
      link: "Home",
      to: "/",
    },
    {
      link: "Menu",
      to: "/menu",
    },
    {
      link: "Blog",
      to: "/blog",
    },
    {
      link: "About",
      to: "/about",
    },
    {
      link: "Shop",
      to: "/shop",
    },
    {
      link: "Contact",
      to: "/contact",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrolled
    ? "bg-[#FFF6E9] bg-opacity-50 transition duration-300 text-black shadow-md backdrop-blur-xl"
    : "text-black transition duration-300";

  return (
    <div
      className={`flex items-center min-h-[66px] fixed top-0 w-full z-50 ${navbarClasses}`}
    >
      <nav className="navbar flex items-center my-1 w-full px-[3%]">
        <div className="lg:hidden mr-2">
          <HiMenuAlt1 size={21} />
        </div>
        <h3 className="navbar-start text-xl md:text-2xl font-playwrite font-extrabold">
          Munchery<span className="text-primary">.</span>
        </h3>
        <ul className="hidden lg:flex gap-6 items-center navbar-center ">
          {navlinks.map((link) => (
            <NavLink
              key={link.link}
              to={link.to}
              className="relative inline-flex font-outfit items-center justify-center leading-normal px-1 font-medium transition group"
            >
              {({ isActive }) => (
                <>
                  {link.link}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full ${
                      isActive ? "block" : "hidden"
                    }`}
                  />
                  <span
                    className={`absolute rounded-full -bottom-1 left-0 w-full h-[2px] bg-primary origin-bottom-right transform transition duration-300 ease-out scale-x-0 ${
                      isActive
                        ? "hidden"
                        : "group-hover:scale-x-100 group-hover:origin-bottom-left"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </ul>
        <div className="navbar-end">
          <button>Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
