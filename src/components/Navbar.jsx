import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeDark } from "../redux/darkMode";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Avatar from "@mui/material/Avatar";
import { Icons } from "../constants/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";

const Navbar = () => {
  const { dark } = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  return (
    <div className="sm:h-[50px] shadow-sm dark:bg-slate-700  dark:text-slate-100 flex items-center justify-between px-2 flex-col-reverse min-h-fit sm:flex-row py-2 sm:py-0 ">
      <div className="flex border-2 border-slate-300 dark:focus-within:border-slate-100 dark:border-slate-400 rounded-md p-1 focus-within:border-slate-500 w-[80%] my-3 sm:my-0 sm:w-fit ">
        <input
          type="text"
          className="focus:outline-none bg-transparent w-full"
        />
        <SearchIcon className="cursor-pointer" onClick={(e) => alert("Halo")} />
      </div>
      <div className="flex items-center gap-x-4">
        <IconButton
          className="dark:text-slate-100 "
          onClick={(e) => dispatch(makeDark())}
        >
          {dark ? (
            <WbSunnyIcon className="text-black dark:text-slate-200  " />
          ) : (
            <DarkModeOutlinedIcon className="text-black dark:text-slate-200" />
          )}
        </IconButton>
        {Icons.map((item) => (
          <div key={item.id}>
            {item.name === "message" ? (
              <Badge badgeContent={4} color="secondary">
                <item.icon />
              </Badge>
            ) : item.name === "notif" ? (
              <Badge badgeContent={4} color="secondary" variant="dot">
                <item.icon />
              </Badge>
            ) : (
              <item.icon />
            )}
          </div>
        ))}
        <Avatar
          alt="profile"
          src="https://avatars.githubusercontent.com/u/67665280?s=400&u=2b3a75b368ec8cf705303fa61eb06e89643fee05&v=4"
          className=" cursor-pointer box-border "
        />
      </div>
    </div>
  );
};

export default Navbar;
