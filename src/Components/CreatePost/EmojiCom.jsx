import React from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { Menu } from "@material-ui/core";

export default function EmojiComponent({
  filePath,
  handleTextAreaValueChange,
  textAreaValueState,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSelectEmoji = (emoji) => {
    handleTextAreaValueChange({
      value: textAreaValueState.value + emoji.native,
      img: filePath,
    });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <SentimentSatisfiedOutlinedIcon
        className="footer-icon"
        onClick={handleClick}
      />
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "bottom",
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: " rgb(25, 39, 52)",
            color: "white",
            boxShadow: "1px 1px 10px #464646",
            // marginTop: "180px",
            // marginLeft: "auto",
          },
        }}
      >
        <div onMouseLeave={handleClose} className="emojis-menu">
          <div>
            <Picker
              set="twitter"
              theme="auto"
              onSelect={handleSelectEmoji}
              style={{
                backgroundColor: " rgb(25, 39, 52)",
              }}
              className="picker-emoji"
            />
          </div>
        </div>
      </Menu>
    </>
  );
}
