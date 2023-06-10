import React from "react";
import Header from "../components/mediaheader/header/header";
import Addpost from "../components/mediaheader/addpost/addpost";
import Profile from "../components/userprofile/userprofile";
import News from "../components/newslist/news";
import Newsfeed from "../components/newsfeed/newsfeed";
import Follow from "../components/followlist/follow";
import "./wall.css";

const Wall = () => {
  return (
    <div className="wall_list">
      <div className="wallcontent">
        <Profile />
        <News />
      </div>
      <div className="wall_news">
        <div>
          <Newsfeed />
          <Newsfeed />
        </div>
        <Follow />
      </div>
    </div>
  );
};
export default Wall;
