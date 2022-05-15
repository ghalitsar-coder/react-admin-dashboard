import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { auth } from "../firebaseConfig";
import Auth from "./pages/Auth";
import List from "./pages/List";
import Home from "./pages/Home";
import Single from "./pages/Single";

import New from "./pages/New";
import { useSelector } from "react-redux";

function App() {
  const { authData: user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={user !== null ? <Home /> : <Auth />} />
          <Route
            path="auth"
            element={user !== null ? <Navigate to="/" /> : <Auth />}
          />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
