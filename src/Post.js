import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://i.zoomtventertainment.com/story/Anupama_Parameswaran.jpg?tr=w-400,h-300,fo-auto"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Anupama Parameswaran{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                @anupama_parameswaran96
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>watch my new movie </p>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Hello_Guru_Prema_Kosame.jpg/220px-Hello_Guru_Prema_Kosame.jpg"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
