// import React from "react";
import logo from "../assets/airbnb logo(1).png";
import SearchBar from "./SearchBar";
import Button from "./Button";
import Dropdown from "./DropDown";
import Profile from "../pages/Profile";

// interface User {
//   email: string;
// }
function NavBar() {
  return (
    <div className="bg-gray-50 h-35 flex gap-5 justify-center items-center shadow-lg">
      <div>
        <img src={logo} alt="" className="hidden md:flex mt-5 ml-10" />
      </div>
      <SearchBar />
      <div className="hidden md:block">
        <Button
          btntext="Become a host"
          btnStyle="h-12 w-36 mt-2 rounded-full hover:bg-gray-500 hover:text-white font-semibold hover:shadow-lg transition duration-300"
        />
      </div>
      <div className="hidden md:flex justify-center items-center gap-3 bg-gray-100 px-1.5 rounded-full hover:shadow-sm">
        <Dropdown />
        <Profile />
      </div>
    </div>
  );
}

export default NavBar;
