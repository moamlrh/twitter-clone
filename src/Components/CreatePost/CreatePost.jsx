import { Avatar, LinearProgress } from "@material-ui/core";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import React, { useState } from "react";
import { connect } from "react-redux";
import { auth, firestore, storage } from "../../firebase/config";
import { createNewPost, createPostTextArea } from "../../Redux/MainActions";
import CreatePostIcon from "../Body/utili/CreatePostIcon";
import "./CreatePost.css";
import EmojiComComp from "./EmojiCom";
import ImageCom from "./ImageCom";

function CreatePost({
  handleTextAreaValueChange,
  textAreaValueState,
  dialogTweets,
}) {
  const [progressValue, setProgressValue] = useState(0);
  const [typeFile, setTypeFile] = useState("");
  const {
    ShowImageComp,
    filePath,
    InputFileUploadComp,
    fileIsSelected,
    handeUploadIconClicked,
    resetInputFileAndRemoveImage,
  } = ImageCom(handleTextAreaValueChange, textAreaValueState);
  const width = window.innerWidth;
  const handleChangeTextArea = (e) => {
    handleTextAreaValueChange({
      value: e.target.value,
      img: filePath,
    });
  };
  const handleButtonTweetClick = async () => {
    const post_id = Math.round(Math.random() * 928459283457);
    const posts = firestore.collection(`posts`);
    const fileType = fileIsSelected?.name?.slice(
      fileIsSelected?.name?.lastIndexOf(".") + 1
    );
    const typeOfFiles = ["jpg", "jpeg", "gif", "png"];
    if (fileIsSelected?.name) {
      console.log(fileType);
      const uploadTask = storage
        .ref(`posts_images/${post_id}`)
        .put(fileIsSelected);
      uploadTask.on(
        "state_changed",
        (snap) => {
          setProgressValue((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        (err) => alert(err.message),
        async () => {
          const URL = await uploadTask.snapshot.ref.getDownloadURL();
          try {
            posts.add({
              img_url: URL,
              post_id,
              post_text: textAreaValueState.value,
              date: Date.now(),
              create_by: auth.currentUser.displayName,
              user_id: auth.currentUser.uid,
              user_img: auth.currentUser.photoURL,
              comments: [],
              likes: [],
              typeOfFile: typeOfFiles.includes(fileType) ? "img" : "vide",
            });
          } catch (error) {
            alert(error.message);
          }
        }
      );
    } else {
      posts
        .add({
          img_url: null,
          post_id,
          post_text: textAreaValueState.value,
          date: Date.now(),
          create_by: auth.currentUser.displayName,
          user_img: auth.currentUser.photoURL,
          user_id: auth.currentUser.uid,
          comments: [],
          likes: [],
          typeOfFile: typeOfFiles.includes(fileType) ? "img" : "vide",
        })
        .catch((error) => alert(error.message));
    }
    resetInputFileAndRemoveImage();
  };
  return (
    <>
      {width <= 500 ? (
        <CreatePostIcon
          value={textAreaValueState.value}
          onChange={handleChangeTextArea}
          ShowImageComp={ShowImageComp}
          InputFileUploadComp={InputFileUploadComp}
          handeUploadIconClicked={handeUploadIconClicked}
          handleButtonTweetClick={handleButtonTweetClick}
        />
      ) : (
        <div className="create-post-app" id="create-post-app">
          <div className="main">
            <div className="avatar">
              <Avatar className="avatar-logo" />
            </div>
            <div className="create-post">
              {/* ----------------------------------  Text Area ----------------------------------   */}
              <div className="input-text">
                <textarea
                  id="textarea"
                  placeholder="what's happening?"
                  value={textAreaValueState.value}
                  onChange={handleChangeTextArea}
                  className={dialogTweets && dialogTweets}
                ></textarea>
                {ShowImageComp}
              </div>
              {/* ----------------------------------  Icons And Button ----------------------------------   */}
              <div className="create-post-footer">
                <div className="create-post-footer-icons">
                  {InputFileUploadComp}
                  <ImageOutlinedIcon
                    className="footer-icon"
                    onClick={handeUploadIconClicked}
                  />
                  <EmojiComComp
                    textAreaValueState={textAreaValueState}
                    handleTextAreaValueChange={handleTextAreaValueChange}
                    filePath={filePath}
                  />
                  <GifRoundedIcon className="footer-icon" />
                  <BarChartOutlinedIcon className="footer-icon" />
                </div>
                <button onClick={handleButtonTweetClick}>Tweet</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="progress">
        {progressValue > 0 && progressValue < 99 ? (
          <LinearProgress variant="query" value={progressValue} />
        ) : null}
      </div>
    </>
  );
}

const mapState = (state) => ({
  textAreaValueState: state.appStore.createPostTextAreaValue,
});
const mapDispatch = (dispatch) => ({
  handleTextAreaValueChange: (value) => dispatch(createPostTextArea(value)),
  createNewPostDis: (info) => dispatch(createNewPost(info)),
});
export default connect(mapState, mapDispatch)(CreatePost);
