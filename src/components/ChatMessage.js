import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        alt="user-icon"
        className="h-8 rounded-full border-black"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
