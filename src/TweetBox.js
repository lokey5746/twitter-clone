import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImagae] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Anupama Parameswaran",
      username: "@anupama_parameswaran96",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.zoomtventertainment.com/story/Anupama_Parameswaran.jpg?tr=w-400,h-300,fo-auto",
    });
    setTweetMessage("");
    setTweetImagae("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.zoomtventertainment.com/story/Anupama_Parameswaran.jpg?tr=w-400,h-300,fo-auto"></Avatar>
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImagae(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
