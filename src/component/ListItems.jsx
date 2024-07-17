import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer Programming",
    "Movie",
    "Music",
    "News",
    "Sports",
    "Learn Coding",
    "Entertainment",
    "Games",
    "Football",
    "Cricket",
    "Travel",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="text-gray-700 flex-none font-medium  bg-gray-200 py-2 px-4 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
