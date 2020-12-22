import React, { useState } from "react";
import "./ProfileDailog.css";
import Menu from "@material-ui/core/Menu";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export function ProfileDailog(post) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  function handleClick(event, { name, user }) {
    setAnchorEl(event.currentTarget);
    setUserInfo({ name, user });
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "310px",
            backgroundColor: " rgb(25, 39, 52)",
            color: "white",
            boxShadow: "1px 1px 10px #464646",
            padding: "10px",
            borderRadius: "20px",
          },
        }}
      >
        <div onMouseLeave={handleClose} className="menu-user-info">
          <div className="user-info-av-bt">
            <Avatar src={post?.user_img} className="user-info-avatar" />
            <button>Following</button>
          </div>
          <div className="user-info-menu">
            <div className="user-info-details">
              <Link to="/profile" className="link">
                <h4>{post?.create_by || "Test Name"}</h4>
              </Link>
              <span>@{post?.user_id?.slice(0,10)}</span>
              <p>description of an acount</p>
              <div className="user-info-followers">
                <h6>
                  10 <span>following</span>
                </h6>
                <h6>
                  102 <span>followers</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
  return {
    handleClick,
    renderMenu,
  };
}
