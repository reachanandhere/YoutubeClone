import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-4 bg-gray-200">
    <div>
      <img alt="user" src={USER_ICON} className="w-12 h-12" />
    </div>
    <div className="px-4">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    </div>
  );
};

export default Comment;
