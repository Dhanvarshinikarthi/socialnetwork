import React, { useState } from "react";
import "./newsfeed.css";
import profile from "../../assets/images/profile.png";
import likes from "../../assets/icons/favourite.png";
import tweet from "../../assets/icons/retweet.png";
import unlikes from "../../assets/icons/like.gif";

const Newsfeed = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => setCount(count + 1);
  const [heartactive, setHeartactive] = useState(false);
  return (
    <div className="newsfeed_main">
      <div className="newsfeedheader_main">
        <div className="myprofile">
          <img src={profile} alt="profile" />
          <p>
            <span>
              <b>Reymond gale</b>
            </span>
            @ reygale
            <p>Motion artist,MGX</p>
          </p>
        </div>
        <button id="viralbtn">Viral</button>
      </div>
      <div className="heropage"></div>
      <div className="bio">
        <div className="description">
          <h5>NFT photography peak time in george town</h5>
          <p>
            Be the first to get one of the 100+ launch-NFTs in our newly
            launched Marketplace Beta! Get Me Here...
          </p>
        </div>
        <div className="views">
          <p>2 Mins ago</p>
          <p>
            <span>
              <b>93</b>
            </span>
            Views
          </p>
        </div>
      </div>
      <div className="posts">
        <div className="reactions">
          <div className="like">
            {!heartactive ? (
              <button
                onClick={() => {
                  handleChange();
                  setHeartactive(true);
                }}
              >
                <img src={likes} alt="likes" />
              </button>
            ) : (
              <button onClick={() => setHeartactive(false)}>
                <img src={unlikes} alt="unlike" />
              </button>
            )}

            <p>
              <b>{count}</b>Like
            </p>
          </div>

          <div className="tweet">
            <button>
              <img src={tweet} alt="tweet" />
            </button>
            <p>
              <b>{23}</b>Tweet
            </p>
          </div>
        </div>
        <button id="add">Add Tweet</button>
      </div>
    </div>
  );
};
export default Newsfeed;
