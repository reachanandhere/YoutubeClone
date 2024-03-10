import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { togglemenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const toggleMenuHandler = () => {
    dispatch(togglemenu());
  };

  const searchCache = useSelector(store=>store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) setSearchResults(searchCache[searchQuery])
      else getSearchSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    dispatch(cacheResults({[searchQuery] : json[1]}))
  };

  const blurHandlerLeave = () => {
    let searchList = document.getElementById("searchList");
    searchList.style.display = "none";
  };

  const blurHandlerEnter = () => {
    let searchList = document.getElementById("searchList");
    searchList.style.display = "block";
  };

  return (
    <section className="grid grid-flow-col p-4 m-2 shadow-lg">
      <section className="flex col-span-2">
        <img
          className="h-8 cursor-pointer"
          src={HAMBURGER}
          alt="hamburger"
          onClick={toggleMenuHandler}
        />
        <img className="h-8 mx-4" src={YOUTUBE_LOGO} alt="Logo" />
      </section>
      <section className="col-span-9">
        <div className="w-full">
          <label class="relative text-gray-400 focus-within:text-gray-600">
            <input
              type="text"
              placeholder="Search"
              class="form-input border border-gray-400 py-2 px-4 bg-white  w-[50%] rounded-xl "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

          {searchResults?.length > 0 && (
            <div
              id="searchList"
              className="absolute bg-white px-2 py-2 w-[32%] border border-b-0 shadow-2xl rounded-lg"
              onMouseEnter={blurHandlerEnter}
              onMouseLeave={blurHandlerLeave}
            >
              <ul>
                {searchResults.map((result) => {
                  return (
                    <li className="cursor-pointer hover:bg-gray-200 py-1 pl-2">
                      {result}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="col-span-1">
        <img className="h-8 float-right" src={USER_ICON}></img>
      </section>
    </section>
  );
};

export default Header;
