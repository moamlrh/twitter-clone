import React, { useState } from "react";
import AddCircleOutlineRounded from "@material-ui/icons/AddCircleOutlineRounded";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {
  Close,
  LocationCity,
  Gif,
  Image,
  TrendingUpOutlined,
  AddOutlined,
} from "@material-ui/icons";
import "./CreatePostIcon.css";

function CreatePostIcon({
  value,
  onChange,
  ShowImageComp,
  InputFileUploadComp,
  handeUploadIconClicked,
  handleButtonTweetClick,
}) {
  const [open, setOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const handleIconClicked = () => {
    setShowIcon(!showIcon);
    setOpen(!open);
  };
  const handleClickBtnTweet = () => {
    setShowIcon(!showIcon);
    setOpen(!open);
    handleButtonTweetClick();
  }; 

  return (
    <>
      <div className="create-post-icon-container">
        <AddCircleOutlineRounded
          style={{ display: showIcon ? "block" : "none" }}
          onClick={handleIconClicked}
        />
      </div>
      <Dialog open={open} onClose={handleIconClicked} fullScreen fullWidth>
        <DialogTitle className="dialog-title">
          <div className="cp-dialog-title">
            <div className="cp-title-icon">
              <Close
                className="cp-title-close-icon"
                onClick={handleIconClicked}
              />
            </div>
            <h4>Drafts</h4>
            <Button
              variant="outlined"
              className="cp-title-btn"
              onClick={handleClickBtnTweet}
            >
              Tweet
            </Button>
          </div>
        </DialogTitle>
        <DialogContent className="cp-dialog-content">
          <div className="content-footer">
            <div className="content-ava-textarea">
              <div>
                <Avatar className="content-avatar" />
                <textarea
                  id="textarea"
                  placeholder="what's happening?"
                  value={value.value}
                  onChange={onChange}
                ></textarea>
              </div>
              {ShowImageComp}
            </div>
            <div className="content-footer-icons">
              <div className="left-icons">
                {InputFileUploadComp}
                <Image onClick={handeUploadIconClicked} />
                <Gif />
                <TrendingUpOutlined />
                <LocationCity />
              </div>
              <div className="right-icons">
                <AddOutlined />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreatePostIcon;
