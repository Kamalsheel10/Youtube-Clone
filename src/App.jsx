import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { useAuth } from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import PlayingVideo from "./component/PlayingVideo";
import Search from "./component/Search";
import Loading from "./loader/Loading";

function App() {
  const { loading, data } = useAuth();
  // console.log(loading);
  // console.log(data);
  return (
    <div>
      {loading && <Loading></Loading>}
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/search/:searchQuery" element={<Search></Search>}></Route>
        <Route
          path="/video/:id"
          element={<PlayingVideo></PlayingVideo>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
