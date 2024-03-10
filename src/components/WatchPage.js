import React, { useEffect } from "react";
import { closeMenu, togglemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();


  useEffect(() => {
    dispatch(closeMenu());

   return ()=>{
    dispatch(togglemenu())
   }
  });

  return (
    <div className="w-8/12 pl-5">
    <div>
      <iframe
       className="w-11/12  aspect-video"
        
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?&autoplay=1&mute=0&controls=1&showinfo=0&modestbranding=0"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <Comments />
    </div>
  );
};

export default WatchPage;
