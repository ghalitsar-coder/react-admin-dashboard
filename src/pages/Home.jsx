import React from "react";

import { Sidebar, Navbar, Widgets, Featured, Chart } from "../components";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className="flex min-h-screen dark:bg-slate-800   ">
      <Sidebar />
      <div className="flex-[6] ">
        <Navbar />
        <Widgets />
        <div className="flex flex-col sm:flex-row p-2  gap-x-2 ">
          <Featured />
          <Chart />
        </div>
        <div className="text-center max-w-md block mx-auto md:min-w-full p-2 ">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
