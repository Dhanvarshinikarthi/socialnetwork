import React, { useState } from "react";
import cancel from "../../../assets/images/cancel.png";
import "./addpost.css";
const Addpost = (props) => {
  const [imgFile, uploadImg] = useState([]);
  const imagePreview = (e) => {
    if (e.target.files.length !== 0) {
      uploadImg((imgFile) => [
        ...imgFile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  return props.trigger ? (
    <div className="postclose">
      <div className="createpost_main">
        <form>
          <div className="post">
            <h1>Create a post</h1>
            <div className="uploadimage">
              <h4>ImagePreview</h4>
              {imgFile.map((elem) => {
                return (
                  <span key={elem}>
                    <img src={elem} alt="image" />
                  </span>
                );
              })}
              <input
                type="file"
                placeholder="Choose File"
                onChange={imagePreview}
                required
              />
            </div>
          </div>
          <div className="detail">
            <input type="title" placeholder="Title" required />
            <textarea
              placeholder="Description goes here"
              rows="10"
              cols="10"
              required
            ></textarea>
            <button>Add post to feed</button>
          </div>
        </form>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={cancel} alt="cancel" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default Addpost;
