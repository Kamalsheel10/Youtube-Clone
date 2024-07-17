import React, { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import youtubelogo from "../../public/youtubelogo.png";
import profile from "../../public/profile.jpg";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex justify-between px-6 py-2 fixed top-0 w-full bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={youtubelogo} alt="YouTube Logo" className="w-12 cursor-pointer" />
      </div>
      <div className="flex items-center w-1/2">
        <div className="flex-grow px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size="24px" />
        </button>
        <IoMdMic
          size="42px"
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex items-center space-x-7">
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
