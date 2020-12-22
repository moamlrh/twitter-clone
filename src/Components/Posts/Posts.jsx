import React, { forwardRef, useEffect, useState } from "react";
import "./Posts.css";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { ProfileDailog } from "./ProfileDailog";
import PostContent from "./PostContent";
import { firestore } from "../../firebase/config";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Posts = forwardRef(({ post }, ref) => {
  const { renderMenu, handleClick } = ProfileDailog(post);
  const { PostHeader } = PostContent(handleClick, post);
  const {user} = useCookies("user")[0];
  const user_id = user.uid;
  const history = useHistory()
  const [like, setLike] = useState(post?.likes?.length);
  const [colorLike, changeColorLike] = useState(
    post.likes.includes(user_id) ? "#1DA1F2" : "white"
  );
  const makeLikeOrDisLike = async (id, like) => {
    await firestore
      .collection("posts")
      .doc(id)
      .update({
        likes: [...like],
      });
  };
  const handleFavoriteClick = async () => {
    const {docs} = await firestore.collection(`posts`).get();
    try {
      docs.forEach((doc) => {
        const post_likes = [...doc.data().likes];
        if (doc.data().post_id === post.post_id) {
          if (post_likes.includes(user_id)) {
            setLike(like - 1);
            changeColorLike("white");
            post_likes.filter((user) => user !== user_id);
            makeLikeOrDisLike(doc.id, post_likes);
          } else {
            changeColorLike("#1DA1F2");
            setLike(like + 1);
            post_likes.unshift(user_id);
            makeLikeOrDisLike(doc.id, post_likes);
          }
        }
      }); 
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div className={`posts`} id={post.post_id} ref={ref}>
      <div className="post-with-image">
        <div className="post-info">{PostHeader}</div>
        <div className="post-reactions-btn">
          <div onClick={() => history.push(`/post/status/${post?.post_id}`)}>
            <ModeCommentOutlinedIcon />
          </div>
          <div>
            <RepeatOutlinedIcon />
          </div>
          <div
            onClick={handleFavoriteClick}
            style={{
              color: colorLike,
            }}
          >
            {like}
            <FavoriteBorderOutlinedIcon />
          </div>
          <div>
            <ShareOutlinedIcon />
          </div>
        </div>
      </div>
      {renderMenu}
    </div>
  );
});

export default Posts;
