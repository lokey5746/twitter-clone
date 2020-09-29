import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.zoomtventertainment.com/story/Anupama_Parameswaran.jpg?tr=w-400,h-300,fo-auto"></Avatar>
          <input placeholder="What's happening" type="text" />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
