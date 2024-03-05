import React from "react";
import { useDispatch } from 'react-redux';
import { HAMBURGER, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { togglemenu } from "../utils/appSlice";

const Header = () => {
 
  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(togglemenu())
  }

  return (
    <section className="grid grid-flow-col p-4 m-2 shadow-lg">
      <section className="flex col-span-2">
        <img className="h-8 cursor-pointer" src={HAMBURGER} alt="hamburger" onClick={toggleMenuHandler} />
        <img className="h-8 mx-4" src={YOUTUBE_LOGO} alt="Logo" />
      </section>
      <section className="col-span-9">
        
        <label class="relative text-gray-400 focus-within:text-gray-600">
          <input
            type="text"
            placeholder="Search"
            class="form-input border border-gray-400 py-2 px-4 bg-white  w-1/2 rounded-xl "
          />

          <svg
            className="pointer-events-none w-8 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <g class="search-path" fill="none" stroke="#848F91">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </label>
      </section>

      <section className="col-span-1">
        <img className="h-8 float-right" src={USER_ICON}></img>
      </section>
    </section>
  );
};

export default Header;
