import React, { useEffect } from "react";
import { closeMenu, togglemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      dispatch(togglemenu());
    };
  });

  return (
    <div className="w-full pl-5">
      <div className="flex">
        <iframe
          className="w-9/12 sm:w-full h-[35vw] sm:h-[300px]"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?&autoplay=1&mute=0&controls=1&showinfo=0&modestbranding=0"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="w-3/12 mx-2 sm:hidden">
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
