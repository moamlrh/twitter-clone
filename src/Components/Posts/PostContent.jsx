import { Avatar } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import { Link, useHistory } from "react-router-dom";
import PostsMenu from "./PostsMenu";

function PostContent(handleClick, post) {
  const history = useHistory();
  const PostHeader = ( 
    <>
      <Link to="/profile" className="link link-post-avatar">
        <div className="post-avatar-div">
          <Avatar
            src={post?.user_img}
            className="post-avatar show-pop-up-user"
            id="post-avatar-id"
          />
        </div>
      </Link>
      <div className="post-body">
        <div className="post-header">
          <h4>
            <p onMouseEnter={(e) => handleClick(e, {})}>{post?.create_by}</p>
            <Link to="/profile" className="link ">
              <span>@{post?.user_id?.slice(0, 10) + "  " + post?.date}</span>
            </Link>
          </h4>
          <PostsMenu />
        </div>
        <div
          className="post-text"
          onClick={() => history.push(`/post/status/${post?.post_id}`)}
        >
          <p>{post?.post_text}</p>
          {post?.img_url && post.typeOfFile === 'img'  && <img alt="media" src={post?.img_url} />}
          {post.img_url && post.typeOfFile !== 'img' && (
            <ReactPlayer 
              url={post?.img_url}
              controls
              light
              playing
              className="vide-player"
            />  
          )}
        </div>
      </div> 
    </>
  );
  return {
    PostHeader,
    history,
  };
}

export default PostContent;
