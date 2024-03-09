import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
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
    <section className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard  info={video} />
          </Link>
        );
      })}
    </section>
  );
};

export default VideoContainer;
