import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVertSharp,
} from "@mui/icons-material";
import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Target = ({ type, IconKey, title, amount }) => {
  return (
    <div className="text-center">
      <h1 className="text-slate-400 dark:text-slate-300  ">{title}</h1>
      <div
        className={`flex flex-col justify-center items-center ${
          type === "positive" ? "text-green-500" : "text-red-500"
        } `}
      >
        <IconKey />
        <span>
          {type === "negative" ? "-" : "+"}${amount}k
        </span>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="flex-[2] rounded-sm shadow-md p-3 dark:bg-slate-700 ">
      <div className="flex text-slate-500 justify-between items-center">
        <h1 className="font-semibold dark:text-slate-200 ">Total Revenue</h1>
        <MoreVertSharp className="dark:text-slate-200 " />
      </div>
      <div className="p-4">
        <CircularProgressbarWithChildren
          value={66}
          text="66%"
          strokeWidth={5}
          className="w-32 h-32 mx-auto my-4"
        />
        <div className="text-center grid gap-y-4">
          <p className="text-slate-500  dark:text-slate-300 ">
            Total sales made today
          </p>
          <p className="text-4xl dark:text-slate-100 text-slate-800 ">$420</p>
          <p className="text-slate-400 text-sm  dark:text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          </p>
        </div>
        <div className="flex items-center justify-between my-5">
          <Target
            type="positive"
            IconKey={KeyboardArrowUp}
            title="Target"
            amount="12.4"
          />
          <Target
            type="negative"
            IconKey={KeyboardArrowDown}
            title="Last Week"
            amount="4.7"
          />
          <Target
            type="positive"
            IconKey={KeyboardArrowUp}
            title="Last Week"
            amount="34.1"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
