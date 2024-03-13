import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";
import { addVideoDetails } from "../utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch()
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json?.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  const handleParam=(video)=>{
    dispatch(addVideoDetails(video))
  }

  return (
    <section className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id} onClick={()=>handleParam(video)}>
            <VideoCard  info={video} />
          </Link>
        );
      })}
    </section>
  );
};

export default VideoContainer;
