import React from "react";
import "./chatpage.css";
import Currentchatpage from "../components/chatpage/currentpage/currentpage";
import Recentchatpage from "../components/chatpage/recentpage/recentpage";
const ChatPage = () => {
  return (
    <div className="chatpage_main">
      <Recentchatpage />
      <Currentchatpage />
    </div>
  );
};
export default ChatPage;
