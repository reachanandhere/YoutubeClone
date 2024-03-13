import React, { useEffect, useState } from "react";
import { closeMenu, togglemenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import VideoOnSide from "./VideoOnSide";
import {
  HELPER,
  VIDEO_ID_API,
  YOUTUBE_API,
  YOUTUBE_API_KEY,
} from "../utils/constants";

const WatchPage = () => {
  // const video = useSelector((store) => store.video?.selectedVideo);
  const [video, setVideo] = useState(null);

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const fetchVideo = async () => {
    const data = await fetch(
      VIDEO_ID_API + searchParams.get("v") + HELPER + YOUTUBE_API_KEY
    );
    const json = await data.json();
    setVideo(json.items[0]);
    console.log(video)
  };

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideo();

    return () => {
      dispatch(togglemenu());
    };
  },[]);
  // if(!video) return false;
  // const { snippet, statistics } = video;
  // const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="w-full pl-5">
      <div className="flex">
        <div className="w-9/12   ">
          <iframe
            className="w-full sm:h-[300px] h-[35vw] sm:w-full"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?&autoplay=1&mute=0&controls=1&showinfo=0&modestbranding=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="flex">
            <div>
            <h1 className="text-3xl font-bold py-2 px-4">
              {video?.snippet?.channelTitle}
            </h1>
            <h4 className="text-xl font-bold px-4 text-gray-600">
              {video?.statistics?.viewCount} views
            </h4>
            </div>
            <button className="w-48 h-16 my-4 rounded-full bg-red-600 text-white">Subscribe</button>
          </div>
        </div>

        <div className="w-3/12 mx-2 sm:hidden">
          <LiveChat />
        </div>
      </div>
      <div className="flex">
        <Comments />
        <VideoOnSide />
      </div>
    </div>
  );
};

export default WatchPage;
