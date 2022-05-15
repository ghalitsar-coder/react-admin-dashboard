import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import data from "../constants/Sidebar";
import { makeDark } from "../redux/darkMode";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { authLogout } from "../redux/userRedux";

const Sidebar = () => {
  const { dark } = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const title = ["MAIN", "LISTS", "SERVICE", "USER"];
  let titleIndex = 0;

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    if (e.target.textContent === "Logout") {
      signOut(auth)
        .then(() => {
          dispatch(authLogout());
          navigate("/auth");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="hidden sm:block flex-1 shadow-md min-h-screen dark:bg-slate-700 dark:text-slate-100 ">
      <div className="shadow-sm dark:shadow-white">
        <h1 className="h-[50px] grid place-content-center text-2xl font-semibold dark:text-slate-100 text-slate-400 ">
          Elfaris.
        </h1>
      </div>
      <div className="px-3">
        <ul className="grid gap-y-4 min-w-max ">
          {data?.map((item, i) => (
            <div key={i}>
              {i % 3 === 0 && (
                <p className="my-3 text-slate-400 text-sm font-semibold ">
                  {title[titleIndex++]}{" "}
                </p>
              )}

              <li
                className="flex items-center p-1 group gap-x-2 hover:bg-indigo-300 transition-all cursor-pointer "
                onClick={handleNavigate}
              >
                <item.icon className="text-indigo-500" />
                <span className="text-slate-600 dark:text-slate-100 dark:group-hover:text-neutral-50 group-hover:text-slate-100 ">
                  {item.title}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
