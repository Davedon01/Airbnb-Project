import React from "react";
// import myIcon from "../SearchIcon.svg";
// import { Search } from "lucide-react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  // const mobileSearch = () => {
  // const [searchInput, setSearchInput] = React.useState('')
  // }
  return (
    <div className="overflow-hidden">
      <form>
        <div className="mt-10 mb-3 relative md:hidden">
          <input
            type="text"
            id="text"
            className="bg-gray-50 border-none font-bold text-gray-900 text-lg rounded-full focus:outline-none h-16 w-full text-center mx-1 shadow-lg"
            placeholder="Start your search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* <img
            src={myIcon}
            alt=""
            className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-700 font-bold"
          /> */}
           <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              transform=""
              id="injected-svg"
              className="absolute top-1/2 left-6 transform -translate-1/2 text-gray-700"
            >
              <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z" />
            </svg>
        </div>
      </form>
      <div className="hidden md:flex items-center justify-center border-none rounded-full shadow-md overflow-hidden ">
        {/* Loction */}
        <button className="h-14 w-60 flex items-center justify-center p-4 text-sm font-medium text-gray-900 hover:bg-gray-500 hover:rounded-full hover:text-white transition duration-300 rounded-full">
          Anywhere
        </button>
        <div className="w-px h-6 bg-gray-300 hover:hidden"></div>

        {/* Date */}
        <button className="h-14 w-60 flex items-center justify-center text-center p-4 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-500 hover:rounded-full hover:text-white transition duration-300">
          Date
        </button>
        <div className="w-px h-6 bg-gray-300"></div>

        {/* Guest */}
        <div className="">
          <button className="h-14 w-60 flex items-center justify-between text-cente p-4 text-sm font-medium text-gray-900 rounded-full hover:bg-gray-500 hover:rounded-full hover:text-white transition duration-300">
            Guest
            {/* <img src={myIcon} alt=""  className="rounded-full p-4 z-50 absolute"/> */}
            <svg
              width="30"
              height="30"
              fill="white"
              viewBox="0 0 24 24"
              transform=""
              id="injected-svg"
             className="bg-rose-500 rounded-full p-1">
              <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
