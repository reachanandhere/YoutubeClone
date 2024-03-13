import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const VideoOnSide = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json?.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="w-3/12 my-8 overflow-y-scroll h-[80vh] sm:hidden">
      {videos.map((v) => {
        return (
          <div className="flex p-2">
            <img className="w-5/12 p-1 max-h-[140px]" src={v.snippet.thumbnails.medium.url} />
            <div>
              <h3 className="font-bold py-2">{v.snippet.title}</h3>
              <h4>--{v.snippet.channelTitle}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoOnSide;
