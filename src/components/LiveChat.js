import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/nameGenerator";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
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
    <div>
      <div className="w-[100%] p-2 h-[33vw] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, index) => {
          return <ChatMessage key={index} name={c.name} message={c.message} />;
        })}
      </div>
      <div>
        <form 
        onSubmit={
            (e) => { 
                e.preventDefault() 
                dispatch(addMessage({
                    name: 'Anand Verma',
                    message: liveMessage
                }))
            }
        } 
        className="relative">
          <input
            placeholder="Enter message here"
            className="w-[80%] border border-black p-2 rounded-lg"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="bg-slate-600 text-white w-[20%] py-2 shadow-lg font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
