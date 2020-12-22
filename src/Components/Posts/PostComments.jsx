import { Avatar } from "@material-ui/core";
import React from "react";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./PostComments.css";

function PostComments({ comment }) {
  return (
    <>
      <div className="show-tweet-comments">
        <div className="comment-info">
          <div className="comment-userInfo">
            <div className="comment-user-info">
              <Avatar src={comment.commented_by?.photoURL} />
              <h4>{comment.commented_by?.displayName}</h4>
              <p>{comment.commented_by?.uid.slice(0, 10)}</p>
              <span>{comment?.time?.seconds}</span>
            </div>
            <MoreHorizIcon />
          </div>
          <span className="comment-replying">
            Replying to {comment?.replyTo}
          </span>
          <div className="comment-content">
            <p>{comment?.text}</p>
          </div>
          <div className="comment-reactions">
            <div>
              {comment?.reactions?.comments}
              <ModeCommentOutlinedIcon />
            </div>
            <div>
              {comment?.reactions?.retwitt}
              <RepeatOutlinedIcon />
            </div>
            <div>
              {comment?.reactions?.likes}
              <FavoriteBorderOutlinedIcon />
            </div>
            <div>
              <ShareOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostComments;
