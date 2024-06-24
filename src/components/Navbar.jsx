import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      if (offset > 30) {
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
    ? "bg-[#FFF6E9] transition duration-300 text-black"
    : " transition duration-300";

  return (
    <div
      className={`shadow-md flex items-center min-h-[66px] fixed top-0 w-full z-50 ${navbarClasses}`}
    >
      <nav className="flex my-3 justify-between w-full px-[3%]">
        <h3 className="text-2xl font-playwrite font-extrabold">
          Munchery<span className="text-primary">.</span>
        </h3>
        <ul className="flex gap-7 items-center">
          {navlinks.map((link) => (
            <NavLink
              key={link.link}
              to={link.to}
              className="relative inline-flex font-outfit items-center justify-center leading-normal px-1 text-black font-medium transition group"
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
      </nav>
    </div>
  );
};

export default Navbar;
