import React from "react";
import { Navbar, Sidebar } from "../components";

const List = () => {
  return (
    <div className="flex min-h-screen dark:bg-slate-800   ">
      <Sidebar />
      <div className="flex-[6] ">
        <Navbar />
      </div>
    </div>
  );
};

export default List;
