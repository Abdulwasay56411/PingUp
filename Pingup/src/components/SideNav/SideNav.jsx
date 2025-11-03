import { useState } from "react";
import Logo from "../../assets/Logo.png";
import Sample from "../../assets/sample.png";
import { NavLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { FiMessageCircle, FiUsers, FiUser, FiMenu } from "react-icons/fi";
import { CiSearch, CiCirclePlus } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import Button from "../Button/Button";

const navLink = [
  { id: 1, icon: <TiHomeOutline />, heading: "Feed", path: "/" },
  { id: 2, icon: <FiMessageCircle />, heading: "Message", path: "/message" },
  { id: 3, icon: <FiUsers />, heading: "Connections", path: "/connection" },
  { id: 4, icon: <CiSearch />, heading: "Discover", path: "/discover" },
  { id: 5, icon: <FiUser />, heading: "Profile", path: "/profile" },
];

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass =
    "bg-[#EEF2FF] text-[#432DD7]";
  const normalClass =
    "bg-white text-[#4A5565] hover:bg-gray-100";

  return (
    <section>
      <div className="hidden lg:flex lg:flex-col lg:justify-between bg-white w-[288px] h-screen shadow-lg">
        <div>
          <div className="p-4 flex justify-center">
            <img className="w-1/3 h-auto" src={Logo} alt="Logo" />
          </div>
          <div className="w-full h-px mb-5 bg-[#D1D5DC]"></div>

          <div className="mt-2 space-y-2">
            {navLink.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `max-w-[220px] block mx-auto rounded-lg font-medium select-none cursor-pointer transition-colors duration-200 ${
                    isActive ? activeClass : normalClass
                  }`
                }
              >
                <div className="flex p-2 gap-3 items-center">
                  <div className="text-lg">{link.icon}</div>
                  <div>{link.heading}</div>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="px-6 py-4">
            <Button icon={<CiCirclePlus/>}  text="Create post"/>
          </div>
        </div>

        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-2">
            <img className="w-8 h-8 rounded-full" src={Sample} alt="User" />
            <div>
              <h1 className="text-sm font-medium">John Wareen</h1>
              <p className="text-[12px] text-[#6A7282]">@john_warren</p>
            </div>
          </div>
          <RxExit className="text-[#99A1AF] text-xl cursor-pointer" />
        </div>
      </div>

      <div className="block lg:hidden">
        <div
          className="fixed top-4 right-4 bg-white w-10 h-10 rounded-lg shadow-lg flex justify-center items-center cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <FiMenu className="text-2xl" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 z-40 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <img className="w-1/3 h-auto ml-2" src={Logo} alt="Logo" />
          <div className="w-full h-px my-3 bg-[#D1D5DC]"></div>

          {navLink.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg cursor-pointer font-medium ${
                  isActive ? activeClass : "text-[#4A5565]"
                }`
              }
            >
              <div className="text-lg">{link.icon}</div>
              <div>{link.heading}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideNav;
