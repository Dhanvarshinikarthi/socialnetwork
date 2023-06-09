import React from "react";
import "./mediacards.css";
import userimage from "../../../assets/images/userimage.jpg";
import tick from "../../../assets/icons/tick.png";
import follow from "../../../assets/icons/follow.png";
const Profile = () => {
  const Profilelist = [
    {
      id: 1,
      profileimage: userimage,
      icons: tick,
      Name: "William",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      followed: false,
    },
    {
      id: 2,
      profileimage: userimage,
      icons: tick,
      Name: "Jordan",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      followed: false,
    },
    {
      id: 3,
      profileimage: userimage,
      icons: tick,
      Name: "Harry",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      followed: false,
    },
    {
      id: 4,
      profileimage: userimage,
      icons: tick,
      Name: "Picasso",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      followed: false,
    },
    {
      id: 5,
      profileimage: userimage,
      icons: tick,
      Name: "Vermeer",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      followed: false,
    },
    {
      id: 6,
      profileimage: userimage,
      icons: tick,
      Name: "Leonardo",
      bio: "Artist,Motion,graphics",
      description:
        "Be the first to get one of the 100+ launch-NFTs in our newly launched Marketplace Betal Get Me Here",
      followers: "2M Followers",
      posts: "43+posts",
      chats: "Message",
      followed: false,
    },
  ];
  const [friends, setFriends] = React.useState(Profilelist);
  const Handlefriends = (friendId) => {
    setFriends((prevfriends) =>
      prevfriends.map((friendsitem) =>
        friendsitem.id === friendId
          ? { ...friendsitem, followed: !friendsitem.followed }
          : friendsitem
      )
    );
  };
  const Renderprofile = friends.map((friendsitem) => {
    return (
      <div className="profile_main">
        <div className="mediauser"></div>
        <div className="profileinfo">
          <div className="name">
            <img src={friendsitem.icons} alt="tick" />
            <h2>{friendsitem.Name}</h2>
          </div>

          <p id="bio">{friendsitem.bio}</p>
          <p>{friendsitem.description}</p>
          <p id="followers">
            <b>{friendsitem.followers}</b>
          </p>

          <div className="chat">
            <h5>{friendsitem.posts}</h5>
            <button id="msg">{friendsitem.chats}</button>
          </div>
          <button id="followbtn" onClick={() => Handlefriends(friendsitem.id)}>
            {friendsitem.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="mediacards_main">
        <div className="mediacardsheading">
          <img src={follow} alt="follow" />
          <h1>Popular people on social network</h1>
        </div>
        <div className="mediacards">{Renderprofile}</div>
      </div>
    </React.Fragment>
  );
};
export default Profile;
