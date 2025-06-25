import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setShow(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "About", to: "/#about" },
    { label: "Services", to: "/#services" },
    { label: "Case Studies", to: "/#casestudies" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="2xl:container mx-auto bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 border-b shadow-xl z-50 relative">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-3">
        {/* Logo and toggle button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="assests/Security.jpg"
              className="w-10 h-10 rounded-full p-1 bg-white shadow-md"
              alt="logo"
            />
            <div className="flex flex-col leading-tight">
              <p className="text-lg text-white font-semibold font-['Poppins']">SecureShield</p>
              <p className="text-xs text-white text-center font-['Poppins']">Security Services</p>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggle} className="text-white transition hover:scale-110">
              {show ? (
                <svg viewBox="0 0 21 21" fill="currentColor" height="1.5em" width="1.5em">
                  <g fill="none" stroke="currentColor">
                    <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="1.5em">
                  <path d="M904 160H120v80h784v-80zm0 624H120v80h784v-80zm0-312H120v80h784v-80z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <ul
          className={`absolute top-full right-0 backdrop-blur-lg bg-white/20 text-white font-['Poppins'] text-lg shadow-2xl rounded-xl border md:border-none px-6 py-3 mt-2 space-y-4 md:space-y-0 md:space-x-6 md:flex-row flex flex-col justify-end items-center transition-all duration-300 ease-in-out
            md:static md:flex md:bg-transparent md:shadow-none md:items-center ${
              show ? "flex" : "hidden md:flex"
            }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="relative group transition-all duration-300">
              {item.to.startsWith("/#") ? (
                <HashLink
                  smooth
                  to={item.to}
                  className="hover:text-yellow-300 transition duration-200"
                  onClick={() => setShow(false)}
                >
                  {item.label}
                </HashLink>
              ) : (
                <a
                  href={item.to}
                  className="hover:text-yellow-300 transition duration-200"
                  onClick={() => setShow(false)}
                >
                  {item.label}
                </a>
              )}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

