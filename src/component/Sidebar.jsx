import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg"; //<CgMediaLive />
import { CiHome } from "react-icons/ci";
import { FaChevronRight, FaHistory, FaYoutube } from "react-icons/fa"; //<FaChevronRight />
import { FaRegNewspaper } from "react-icons/fa6"; //<FaRegNewspaper />
import { GoHome } from "react-icons/go"; //
import { HiOutlineShoppingBag } from "react-icons/hi"; //<HiOutlineShoppingBag />
import {
  MdOutlinePlaylistAdd,
  MdOutlineSubscriptions,
  MdPodcasts,
  MdWatchLater,
} from "react-icons/md"; //< />
import {
  PiFilmSlateLight,
  PiLightbulbLight,
  PiMusicNoteLight,
} from "react-icons/pi"; //<PiMusicNoteLight />
import {
  SiStylelint,
  SiTrendmicro,
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si"; // < />
import { TfiCup } from "react-icons/tfi"; //<TfiCup />

function Sidebar() {
  const sideBarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sideBarItems1 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <CiHome />,
    },
    {
      id: 2,
      name: "History",
      icon: <FaHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlinePlaylistAdd />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <AiOutlineLike />,
    },
  ];

  const sideBarItems2 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Music",
      icon: <PiMusicNoteLight />,
    },
    {
      id: 3,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 4,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 5,
      name: "Sports",
      icon: <TfiCup />,
    },
    {
      id: 6,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 9,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 10,
      name: "Fashion & Beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  const sideBarItems3 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  return (
    <div className="px-6 w-[35%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      {/* Home */}
      <div className="space-y-3 items-center">
        {sideBarItems.map((item) => {
          return (
            <div key={item} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
        <br></br>
        <hr></hr>
      </div>

      {/* You */}
      <div className="space-y-3 mt-4 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sideBarItems1.map((item) => {
          return (
            <div key={item} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
        <br></br>
        <hr></hr>
      </div>

      {/* Explore */}
      <div className="space-y-3 mt-4 items-center">
        <div className="items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {sideBarItems2.map((item) => {
          return (
            <div key={item} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
        <br></br>
        <hr></hr>
      </div>

      {/* More Section */}
      <div className="space-y-3 mt-4 items-center">
        <div className="items-center space-x-2">
          <h1 className="font-semibold">More From Youtube</h1>
        </div>
        {sideBarItems3.map((item) => {
          return (
            <div key={item} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red-500">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
        <br></br>
        <hr></hr>
      </div>
      <br />
      <span className="text-xs font-semibold text-gray-500">
        About Press Copyright<br></br> Contact us Creators <br /> Advertise
        Developers <br /> <br />
        <p>Terms Privacy Policy & Safety <br /> How YouTube work <br />Test new features </p>
      </span>
      <br />
      <p className="text-xs text-gray-800 mt-2">© 2024 Kamalsheel Mainali </p>
    </div>
  );
}

export default Sidebar;
