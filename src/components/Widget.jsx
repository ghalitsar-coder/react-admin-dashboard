import {
  KeyboardArrowUp,
  PersonOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

const Widget = ({ item }) => {
  const amount = 100;
  const diff = 100;
  return (
    <div className="flex shadow-md rounded-md p-2 justify-between dark:bg-slate-700  ">
      <div className="grid gap-y-3 dark:text-slate-100 ">
        <h1 className="text-md text-slate-500 dark:text-slate-300">
          {item.title}
        </h1>
        <h2 className="text-4xl dark:text-slate-100">
          {item.isMoney && "$"} {amount}
        </h2>
        <span className="text-sm text-slate-400 dark:text-slate-400 ">
          {item.link}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-green-500">
          <KeyboardArrowUp />
          <span className="">{diff} %</span>
        </div>
        <Avatar
          sx={{
            bgcolor: item.backgroundColor,
            color: item.color,
            alignSelf: "flex-end",
            width: 30,
            height: 30,
          }}
          variant="rounded"
        >
          <item.icon />
        </Avatar>
      </div>
    </div>
  );
};

export default Widget;
