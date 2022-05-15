import React from "react";
import Widget from "./Widget";
import data from "../constants/Widgets";

const Widgets = () => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 ">
      {data.map((item) => (
        <Widget item={item} key={item.title} />
      ))}
    </div>
  );
};

export default Widgets;
