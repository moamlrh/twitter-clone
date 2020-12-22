import { Paper, Tabs, Tab } from "@material-ui/core";
import React, { useState } from "react";
import "./MobileNavbar.css";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Notif from "@material-ui/icons/NotificationsTwoTone";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import { useHistory, useLocation } from "react-router-dom";

function MobileNavbar() {
  const { pathname } = useLocation();
  const arr = {
    0: "/",
    1: "/explore",
    2: "/notifications",
    3: "/messages",
    "/": 0,
    "/explore": 1,
    "/notifications": 2,
    "/messages": 3,
  };
  const history = useHistory();
  const [value, setValue] = useState(arr[pathname]);
  const handeTabsChange = (e, newValue) => {
    setValue(newValue);
    history.push(arr[newValue]);
  };
  return (
    <div className="mobile-navbar">
      <Paper square className="paper-nav">
        <Tabs value={value} onChange={handeTabsChange} variant="fullWidth">
          <Tab style={{width:"10px",backgroundColor:"green"}} selected icon={<HomeTwoToneIcon className={`icon-tab ${value === 0 && "active-tabs"}`} />} />
          <Tab icon={<SearchOutlinedIcon className={`icon-tab ${value === 1 && "active-tabs"}`} />} />
          <Tab icon={<Notif className={`icon-tab ${value === 2 && "active-tabs"}`} />} />
          <Tab icon={<MailOutlineTwoToneIcon className={`icon-tab ${value === 3 && "active-tabs"}`} />} />
        </Tabs>
      </Paper>
    </div>
  );
}

export default MobileNavbar;
