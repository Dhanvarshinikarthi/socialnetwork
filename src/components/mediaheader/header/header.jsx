import React, { useState } from "react";
import search from "../../../assets/images/search.png";
import message from "../../../assets/images/message.jpg";
import addpost from "../../../assets/images/post.png";
import burger from "../../../assets/icons/hamburger.svg";
import cancel from "../../../assets/icons/cancel.svg";
import "./header.css";
import Addpost from "../addpost/addpost";
import { Link } from "react-router-dom";
const Header = () => {
  const [addPostOpen, setAddpostOpen] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);
  const Hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={burger}
          alt="hamicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="cancelicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Wall</Link>
        <Link to="/friends">friends</Link>
        <Link to="/chatpage" id="message">
          Chat
        </Link>
      </div>
    </div>
  );
  return (
    <div className="header_main">
      <h1>Social Network</h1>
      <div className="searchbar">
        <input type="search" placeholder="Search" id="searchbarfield" />
        <button>
          <img src={search} alt="search" />
        </button>
      </div>
      <div className="header_link">
        <Link to="/">Wall</Link>
        <Link to="/friends">friends</Link>
        <Link to="/chatpage" id="chatimg">
          <img src={message} alt="message" />
        </Link>
      </div>
      <div className="addpost">
        <div className="createpost">
          <button onClick={() => setAddpostOpen(true)}>
            <img src={addpost} alt="addpost" />
          </button>
        </div>
        Create Posts
      </div>
      {Hamburger}
      {sidebarOn && sidebar}
      <button>Logout</button>
      <Addpost trigger={addPostOpen} setTrigger={setAddpostOpen} />
    </div>
  );
};
export default Header;
