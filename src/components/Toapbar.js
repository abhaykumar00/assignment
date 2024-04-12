import { Link } from "react-router-dom";
import { LuAlignJustify, LuSearch } from "react-icons/lu";
// import MaximizeScreen from "./MaximizeScreen";
import LanguageDropdown from "./LanguageDropDown.js";
import ProfileDropdown from "./ProfileDropdown";
// import NotificationDropdown from "./NotificationDropdown";
import  logoDarkImg from "../images/logo-dark.png";
import  logoLightImg  from "../images/logo-light.png";


const TopbarAdmin = () => {
     const notificationsData = [
        {
          id: 1,

          name: "Datacorp",
          avatar: "",
          subText: "Caleb Flakelar commented on Admin",
          
        },
        {
          id: 2,
          name: "Admin",
          avatar: "",
          subText: "New user registered",
          
        },
        {
          id: 3,
          name: "Cristina Pride",
          subText: "Hi, How are you? What about our next meeting",
          avatar: "",
         
        },
        {
          id: 4,
          name: "Datacorp",
          avatar: "",
          subText: "Caleb Flakelar commented on Admin",
         
        },
        {
          id: 5,
          name: "Karen Robinson",
          subText: "Wow ! this admin looks good and awesome design",
          avatar: "",
         
        },
      ];
      
  return (
    <header className="sticky top-0 z-40 flex h-18 w-full border-b border-default-200 bg-white dark:bg-default-50 lg:ps-64 hide-in-print">
      <nav className="flex w-full items-center gap-4 px-6">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-default-500 hover:text-default-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <LuAlignJustify size={24} />
          </button>
        </div>

        <div className="flex lg:hidden">
          <Link to="/home">
            <img
              src={logoDarkImg}
              height={40}
              width={130}
              alt="logo"
              className="flex h-10 w-full dark:hidden"
            />
            <img
              src={logoLightImg}
              height={40}
              width={130}
              alt="logo"
              className="hidden h-10 w-full dark:flex"
            />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <div className="relative hidden lg:flex">
            <input
              type="search"
              className="block w-64 rounded-full border-default-200 bg-default-50 py-2.5 pe-4 ps-12 text-sm text-default-600 focus:border-primary focus:ring-primary"
              placeholder="Search for items..."
            />
            <span className="absolute start-4 top-2.5">
              <LuSearch size={20} className="text-default-600" />
            </span>
          </div>
        </div>

        <div className="ms-auto flex items-center gap-4">
          <div className="hidden md:flex">
            <LanguageDropdown />
          </div>

          <div className="hidden lg:flex">
           
          </div>

          <div className="hidden md:flex">
           
          </div>

          <div className="flex">
            <ProfileDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopbarAdmin;
