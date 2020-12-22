import { Search } from "@material-ui/icons";
import React from "react";
import HappeningSection from "./HappeningSection";
import "./SidebarRight.css";
import WhoToFollow from "./WhoToFollow";

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="sidebar-right-search">
        <Search className="search-icon" />
        <input placeholder="Search Twitter" />
      </div>
      <div className="sidebar-right-happening">
        <HappeningSection />
        <HappeningSection />
        <HappeningSection />
        <HappeningSection />
        <div className="how-to-follow-show-more">
          <h3>show more </h3>
        </div>
      </div>
      <div className="sidebar-left-who-follow">
        <div className="how-to-follow-header">
          <h3>Who to follow</h3>
        </div>
        <div className="persons">
          <WhoToFollow />
          <WhoToFollow />
          <WhoToFollow />
          <WhoToFollow />
        </div>
        <div className="how-to-follow-show-more">
          <h3>show more </h3>
        </div>
      </div>


      <div className="sidebar-right-twitter-info">
        <h6>Terms of Service</h6>
        <h6>Policy Cookie</h6>
        <h6>More © 2020 Twitter, Inc.</h6>
      </div>
    </div>
  );
}
