import React from "react";
import "./follow.css";
import tick from "../../assets/icons/tick.png";
import follow from "../../assets/icons/follow.png";

const Follow = () => {
  const Followlist = [
    {
      id: 1,
      icon: "tick",
      Name: "William",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      followed: false,
      // request: "Follow",
      // cancelrequest: "Unfollow",
    },
    {
      id: 2,
      icon: "tick",
      Name: "Jordan",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      followed: false,
      // request: "Follow",
      // cancelrequest: "Unfollow",
    },
    {
      id: 3,
      icon: "tick",
      Name: "Harry",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      followed: false,
      // request: "Follow",
      // cancelrequest: "Unfollow",
    },
    {
      id: 4,
      icon: "tick",
      Name: "Picasso",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      followed: false,
      // request: "Follow",
      // cancelrequest: "Unfollow",
    },
    {
      id: 5,
      icon: "tick",
      Name: "Vermeer",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      followed: false,
      // request: "Follow",
      // cancelrequest: "Unfollow",
    },
    {
      id: 6,
      icon: "tick",
      Name: "Leonardo",
      Followers: "2M Followers",
      bio: "Artist,Motion graphics",
      chats: "Message",
      followed: false,
      // request: "Follow",
      // cancelrequest: "Unfollow",
    },
  ];
  const [activeButton, setActiveButton] = React.useState(false);
  const [users, setUsers] = React.useState(Followlist);
  const Handlefollow = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((item) =>
        item.id === userId ? { ...item, followed: !item.followed } : item
      )
    );
  };

  const Renderfollow = users.map((item) => {
    return (
      <div className="follow_main">
        <div className="follow_user"></div>
        <div className="profilepage">
          <div className="followprofile_main">
            <div className="profile">
              <img src={tick} alt="tick" />
              <h2>{item.Name}</h2>
            </div>
            <p id="followers">{item.Followers}</p>
          </div>
          <p>{item.bio}</p>
          <div className="followcards">
            <div className="text">
              <button id="msgbox">{item.chats}</button>
            </div>
            <button id="accept" onClick={() => Handlefollow(item.id)}>
              {item.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="followcards_main">
        <div className="heading">
          <img src={follow} alt="follow" />
          <h1>FOLLOW</h1>
        </div>

        <div className="followcardslist">{Renderfollow}</div>
      </div>
    </React.Fragment>
  );
};
export default Follow;
