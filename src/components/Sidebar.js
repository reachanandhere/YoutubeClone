import React from "react";
import { Link } from 'react-router-dom'
import { SIDEBAR_EXPLORE, SIDEBAR_YOUTUBE, YOUTUBE_OPTION_LIST } from "../utils/constants";

const Sidebar = () => {
  return (
    <section className="p-5 shadow-lg w-2/12 sm:hidden">
      <Link to='/'>
        <h2 className="flex py-2 text-lg">
          <span>
            <img
              className="h-8 px-2"
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            />
          </span>{" "}
          Home
        </h2>
      </Link>

      <h2 className="flex py-2 text-lg">
        <span>
          <img
            className="h-8 px-2"
            src="https://www.iconpacks.net/icons/5/free-youtube-shorts-logo-icon-15251-thumb.png"
          />
        </span>{" "}
        Shorts
      </h2>

      <h2 className="flex py-2 text-lg">
        <span>
          <img
            className="h-8 px-2"
            src="https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-subscription-icon.png"
          />
        </span>{" "}
        Subscriptions
      </h2>
      <hr className="bg-gray-400 my-2"></hr>
      <h1 className="font-bold mt-2">Explore</h1>
      <ul>
        {SIDEBAR_EXPLORE.map((val) => {
        
          return (
            <li key={val} className="flex py-2">
              <span>
                <img className="h-8 px-2" src={val[1]} />
              </span>
              {val[0]}
            </li>
          );
        })}
      </ul>
      <hr className="bg-gray-400  my-2"></hr>
      <h1 className="font-bold mt-4">More from Youtube</h1>
      <ul>
        {SIDEBAR_YOUTUBE.map((val) => {
         
          return (
            <li key={val} className="flex py-2">
              <span>
                <img className="h-8 px-2" src={val[1]} />
              </span>
              {val[0]}
            </li>
          );
        })}
      </ul>
      <hr className="bg-gray-400  my-2"></hr>
      <ul>
        {YOUTUBE_OPTION_LIST.map((val) => {
         
          return (
            <li key={val} className="flex py-2">
              <span>
                <img className="h-8 px-2" src={val[1]} />
              </span>
              {val[0]}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
