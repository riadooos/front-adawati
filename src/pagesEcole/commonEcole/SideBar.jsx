import { useState } from "react";
import controlImg from "./assets/control.png";
import chart_fillImg from "./assets/Chart_fill.png";
import chatImg from "./assets/Chat.png";
import userImg from "./assets/User.png";
import calenderImg from "./assets/Calendar.png";
import searchImg from "./assets/Search.png";
import chartImg from "./assets/Chart.png";
import folderImg from "./assets/Folder.png";
import seattingImg from "./assets/Setting.png";
import logoImg from "./assets/logo.png";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: chart_fillImg },
    { title: "Inbox", src: chatImg },
    { title: "Accounts", src: userImg, gap: true },
    { title: "Schedule ", src: calenderImg },
    { title: "Search", src: searchImg },
    { title: "Analytics", src: chartImg },
    { title: "Files ", src: folderImg, gap: true },
    { title: "Setting", src: seattingImg },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple min-h-screen p-5  pt-8 relative duration-300 sm:w-20`}
      >
        <img
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
          src={controlImg}
          alt="control"
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={logoImg}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="logo"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 sm:scale-0 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt={Menu.title} />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 sm:scale-0`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/*<div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>*/}
    </div>
  );
};
export default SideBar;
