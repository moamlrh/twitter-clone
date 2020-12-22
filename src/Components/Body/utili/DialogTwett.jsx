import React from "react";
import "./DialogTwett.css";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import CreatePost from "../../CreatePost/CreatePost";
import CloseIcon from "@material-ui/icons/Close";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function DialogTwett() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="sidebar-left-home-btn" onClick={() => setOpen(true)}>
        <button className="sidebar-left-tweet-btn">
          <strong>Tweet</strong>
        </button>
      </div>
      <div className="sidebar-left-tweet-hidd-icon">
        <AddCircleOutlineOutlinedIcon
          className="sidebar-left-tweet-icons"
          style={{ fontSize: "29px" }}
          onClick={() => setOpen(true)}
        />
      </div>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            marginTop: "-450px",
            borderRadius: "20px",
          },
        }}
      >
        <div className="dailog-header">
          <CloseIcon onClick={() => setOpen(false)} />
        </div>
        <div className="dialog-content-wapper">
          <DialogContent dividers className="dailog-content">
            <CreatePost dialogTweets="cls-textArea-height"/>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}

export default DialogTwett;
