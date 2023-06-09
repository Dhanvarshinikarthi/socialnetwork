import React from "react";
import "./news.css";
import newsimage from "../../assets/images/newsimage.jpg";
import newslines from "../../assets/icons/newslines.png";
const News = () => {
  const Newsfeed = [
    {
      newsdays: "The news mint.1 week ago",
      description:
        "DeFi booming with new initiative and launches in the space.",
      views: "205 Views",
      trends: "TRENDING",
    },
    {
      newsdays: "The news mint.1 week ago",
      description:
        "DeFi booming with new initiative and launches in the space.",
      views: "205 Views",
      trends: "TRENDING",
    },
    {
      newsdays: "The news mint.1 week ago",
      description:
        "DeFi booming with new initiative and launches in the space.",
      views: "205 Views",
      trends: "TRENDING",
    },
  ];
  const Rendernews = Newsfeed.map((newstype) => {
    return (
      <div className="news_main">
        <div className="newsfeedlist">
          <img src={newsimage} alt="newsimage" />
          <div className="news_description">
            <p>{newstype.newsdays}</p>
            <h5>{newstype.description}</h5>
            <div className="newsviews">
              <p>{newstype.views}</p>
              <h4>
                <a href="#">{newstype.trends}</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="newscards_main">
        <div className="newsheading_main">
          <img src={newslines} alt="newslines" />
          <h1>NEWS</h1>
        </div>
        <div className="newsfeed">
          <img src={newsimage} alt="newsimage" />
          <div className="newslist_description">
            <p>The news mint.1 week ago</p>
            <h5>DeFi booming with new initiative and launches in the space.</h5>
            <div className="newsviews">
              <p>205 Views</p>
              <h4>
                <a href="#">TRENDING</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="artindustry">
          <p>The news mint.1 week ago</p>
          <h5>#NFTize the art industry</h5>
          <div className="latest_views">
            <p>205 Views</p>
            <h4>
              <a href="#">LATEST</a>
            </h4>
          </div>
        </div>

        <div className="newscards">{Rendernews}</div>
      </div>
    </React.Fragment>
  );
};
export default News;
