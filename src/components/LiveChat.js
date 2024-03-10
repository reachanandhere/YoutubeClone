import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/nameGenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat?.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Lorem Ipsum chat message from Anand verma",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100%] p-2 h-[35vw] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((c, index) => {
        return <ChatMessage key={index} name={c.name} message={c.message} />;
      })}
    </div>
  );
};

export default LiveChat;
