import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { ArrowBack, Close } from "@material-ui/icons";
import React, { useState } from "react";
import "./EditProfilePage.css";
import CameraEnhanceOutlinedIcon from "@material-ui/icons/CameraEnhanceOutlined";
function EditProfilePage() {
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    if (window.innerWidth <= 600) {
      setIcon(ArrowBack);
    } else {
      setOpen(!open);
      setIcon(Close);
    }
  };

  return (
    <>
      <button className="profile-edit-btn" onClick={handleClickOpen}>
        Edit profile
      </button>
      <div className="dialog-edit">
        <Dialog
          onClose={() => setOpen(!open)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className="edit-profile-dialog">
            <DialogTitle>
              <div className="edit-dialog-title">
                <Icon
                  className="title-close-icon"
                  onClick={() => setOpen(!open)}
                />
                <h3>Edit profile</h3>
                <Button variant="outlined" className="title-btn">
                  Save
                </Button>
              </div>
            </DialogTitle>
            <DialogContent className="edit-dialog-content">
              <div className="content-bg-img">
                <div className="icons-bg">
                  <CameraEnhanceOutlinedIcon className="camera-icon-bg" />
                  <Close className="close-icon-bg" />
                </div>
                <img alt="bg" src="http://placekitten.com/900/800" />
              </div>
              <div className="content-img">
                <CameraEnhanceOutlinedIcon className="camera-icon-img" />
                <img src="http://placekitten.com/200/300" alt="logo-img" />
              </div>
              <div className="content-inputs">
                <TextField
                  className="content-all-inp inputs-name"
                  label="Name"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  className="content-all-inp inputs-bio"
                  label="Bio"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  multiline
                  rows={3}
                />
                <TextField
                  className="content-all-inp inputs-location"
                  label="Location"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <TextField
                  className="content-all-inp inputs-web-site"
                  label="Web-site"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
                <div className="content-change-date">
                  <span>
                    Birth date <strong>Edit</strong>
                  </span>
                  <h3>June 1, 1999</h3>
                </div>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default EditProfilePage;
