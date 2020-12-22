import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./ShowTweet.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PostsMenu from "./PostsMenu";
import { Avatar, CircularProgress } from "@material-ui/core";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { firestore } from "../../firebase/config";
import PostComments from "./PostComments";
import { useCookies } from "react-cookie";
import ReactPlayer from "react-player";

function ShowTweet() {
  const { postId } = useParams();
  const [tweetPost, setTweetPost] = useState({});
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const typeOfFiles = ["jpg", "jpge", "gif", "png"];
  const { user } = useCookies("user")[0];
  const history = useHistory();
  const addComments = async (id, arr) => {
    await firestore
      .collection("posts")
      .doc(id)
      .update({
        comments: [...arr],
      });
  };
  const handleSubmitBtn = async () => {
    if(commentValue.length < 1) return;
    const clicked_post = await firestore.collection(`posts`).get();
    clicked_post.docs.forEach((doc) => {
      if (doc.data().post_id === parseInt(postId)) {
        setCommentValue("");
        const arr = [...doc.data().comments];
        arr.push({
          commented_by: user,
          text: commentValue,
          time: new Date(),
          replyTo: tweetPost?.create_by,
        });
        addComments(doc.id, arr);
      }
    });
  };
  useEffect(() => {
    const getPostClicked = async () => {
      const allPosts = firestore.collection("posts");
      await allPosts.onSnapshot((snap) => {
        snap.docs.forEach((snap) => {
          if (snap.data().post_id === parseInt(postId)) {
            setTweetPost(snap.data());
            setComments(snap.data().comments);
          }
        });
      });
    };
    getPostClicked();
  }, []);
  return (
    <>
      <div className="show-post">
        <div className="profile-page-header show-post-header">
          <div className="header-arrow-back" onClick={() => history.push("/")}>
            <h3>
              <KeyboardBackspaceIcon />
            </h3>
          </div>
          <div className="header-title">
            <h2>Tweet</h2>
          </div>
        </div>
        {!tweetPost?.date ? (
          <div className="progress-circle">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="show-tweet-post">
              <div className="st-post-info">
                <div className="post-info-header">
                  <Link to="/profile" className="link">
                    <div className="st-post-avatar-div">
                      <Avatar
                        className="post-avatar show-pop-up-user"
                        id="post-avatar-id"
                      />
                    </div>
                  </Link>
                  <div className="post-header-tweet">
                    <h3>
                      <p>{tweetPost?.create_by}</p>
                      <span>{tweetPost?.user_id.slice(0, 10)}</span>
                    </h3>
                    <div className="st-icon">
                      <PostsMenu />
                    </div>
                  </div>
                </div>
                <div className="st-post-body">
                  <p>{tweetPost?.post_text}</p>
                  {tweetPost?.img_url &&
                    typeOfFiles.includes(tweetPost?.typeOfFile) && (
                      <img alt="media" src={tweetPost?.img_url} />
                    )}
                  {tweetPost.img_url &&
                    !typeOfFiles.includes(tweetPost?.typeOfFile) && (
                      <ReactPlayer
                        url={tweetPost?.img_url}
                        controls
                        className="vide-player"
                      />
                    )}

                  <span className="st-date">
                    <span>{tweetPost?.date}</span> 2020 · Twitter for iPhone
                  </span>
                </div>
              </div>
              <div className="st-number-of-reactions">
                <p>
                  3 <span>Retweets</span>
                </p>
                <p>
                  3 <span>Quote Tweet</span>
                </p>
                <p>
                  {tweetPost?.likes.length} <span>Likes</span>
                </p>
              </div>
            </div>
            <div className="post-reactions-btn st-reaction">
              <ModeCommentOutlinedIcon />
              <RepeatOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <ShareOutlinedIcon />
            </div>
            <div className="show-tweets-comments">
              <input
                className="input-comment"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              />
              <button onClick={handleSubmitBtn}>Post Comment</button>
              <div className="st-comments">
                {comments.map((com, idx) => {
                  return <PostComments key={idx} comment={com} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShowTweet;
