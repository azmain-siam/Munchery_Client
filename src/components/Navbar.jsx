import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  // console.log(menuRef.current);

  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // console.log(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // Clicking outside
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [open]);

  const navConditionClass = location.pathname !== "/" ? "bg-accent" : "";

  const navbarClasses = scrolled
    ? "bg-[#FFF6E9] transition duration-200 text-black shadow-md border-none h-[50px] backdrop-blur"
    : "text-black transition duration-300";

  return (
    <div
      className={`flex items-center lg:min-h-[66px] fixed top-0 w-full z-50 ${navbarClasses} ${navConditionClass}`}
    >
      <nav className={`navbar flex items-center sm:my-1 w-full px-[3%] `}>
        <div className="relative lg:hidden" ref={menuRef}>
          {/* Sidebar */}
          <button
            onClick={handleClick}
            className="lg:hidden mr-1 focus:bg-[#00000025] p-2 rounded-full"
          >
            <HiMenuAlt1 size={21} />
          </button>
          <div
            className={`fixed h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-0 left-0 bg-accent py-8 w-[200px] sm:w-[270px] transform ${
              open ? "translate-x-0 overflow-y-auto" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-10  shadow-xl`}
          >
            <h3 className="px-4 text-2xl md:text-3xl font-playwrite font-extrabold mb-9">
              Munchery<span className="text-primary">.</span>
            </h3>
            <ul className="flex flex-col gap-2 font-medium px-2 ">
              {navlinks.map((li) => (
                <NavLink
                  onClick={() => setOpen(false)}
                  key={li.link}
                  className={({ isActive }) =>
                    `py-3 px-5 rounded-lg hover:bg-[#ff5e000e] ${
                      isActive && "bg-[#ff5e000e]"
                    }`
                  }
                  to={li.to}
                >
                  {li.link}
                </NavLink>
              ))}
            </ul>
          </div>
          {/* Overlay */}
          {open && (
            <div
              className={`fixed h-screen inset-0 bg-black bg-opacity-50 `}
              onClick={handleClick}
            ></div>
          )}
        </div>

        <Link
          to={"/"}
          className="navbar-start text-xl lg:text-2xl font-playwrite font-extrabold"
        >
          Munchery<span className="text-primary">.</span>
        </Link>
        {/* Navlinks */}
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
