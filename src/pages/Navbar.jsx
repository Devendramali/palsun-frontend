import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openScheme, setOpenScheme] = useState(false);
  const menuItems = [
    { name: "मुख्यपृष्ठ", path: "/" },
    { name: "ग्रामपंचायत प्रशासन", path: "/GrampanchayatPrashsan" },
    { name: "आमच्या बद्दल", path: "/about" },
    { name: "माहिती अधिकार", path: "/mahitiadhikar" },
    { name: "पुरस्कार", path: "/awards" },
    { name: "योजना व कार्यक्रम +", path: "/schemes" },
    { name: "सूचना", path: "/notices" },
    { name: "सोई-सुविधा", path: "/soisuvidha" },
    { name: "जमा खर्च", path: "/jamaKharchPatrak" },
    { name: "यशोगाथा / नाविन्यपूर्ण उपक्रम", path: "/history" },
    {
      name: "मुख्यमंत्री समृद्ध पंचायतराज अभियान",
      path: "/panchayatRajMission",
    },
    { name: "संपर्क", path: "/contact" },
  ];

  const schemeDropdown = [
    { name: "गॅलरी", path: "/gallery" },
    { name: "शासकीय योजना", path: "/government-schemes" },
    { name: "गावातील कार्यक्रम", path: "/village-programs" },
    { name: "शासन निर्णय", path: "/govt-decisions" },
  ];

  const topMenu = menuItems.slice(0, -2);
  const bottomMenu = menuItems.slice(-2);
  return (
    <header className="bg-white lg:py-5">
      <div className="w-full px-5 lg:max-w-7xl lg:mx-auto lg-px-4">
        <div className="flex items-center justify-center h-4 lg:h-16">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center space-x-6">
            {topMenu.map((item, index) => {
              if (item.name === "योजना व कार्यक्रम +") {
                return (
                  <div key={index} className="relative group">
                    <span className="cursor-pointer text-base font-[500] text-gray-800 hover:text-orange-600">
                      {item.name}
                    </span>

                    {/* Dropdown (खाली) */}
                    <div
                      className="absolute left-0 top-full mt-2 w-56 bg-white border rounded-md border-none shadow-lg
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300 z-10"
                    >
                      <ul className="py-2 text-gray-700">
                        {schemeDropdown.map((sub, i) => (
                          <li key={i}>
                            <NavLink
                              to={sub.path}
                              className="block px-4 py-2 hover:text-orange-600"
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-[500] ${
                      isActive
                        ? "text-orange-600"
                        : "text-gray-800 hover:text-orange-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className="hidden lg:flex justify-center gap-6 text-sm">
          {bottomMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="text-base font-[500]  text-gray-800 hover:text-red-500"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="text-3xl lg:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          <TiThMenu />
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                if (item.name === "योजना व कार्यक्रम +") {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setOpenScheme(!openScheme)}
                        className="w-full text-left text-gray-800 hover:text-orange-600 text-sm font-semibold"
                      >
                        {item.name}
                      </button>

                      {openScheme && (
                        <div className="ml-4 mt-2 space-y-2">
                          {schemeDropdown.map((sub, i) => (
                            <NavLink
                              key={i}
                              to={sub.path}
                              onClick={() => {
                                setOpen(false);
                                setOpenScheme(false);
                              }}
                              className="block text-sm text-gray-700 hover:text-orange-600"
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-gray-800   hover:text-orange-600 text-sm"
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
