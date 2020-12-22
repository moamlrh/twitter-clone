import { Avatar } from "@material-ui/core";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import Notif from "@material-ui/icons/NotificationsTwoTone";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TurnedInNotTwoToneIcon from "@material-ui/icons/TurnedInNotTwoTone";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import DialogTwett from "../Body/utili/DialogTwett";
import Menu from "./Menu";
import ProfileIcon from "./ProfileIcon";
import "./SidebarLeft.css";
import SideLeftOptions from "./SideLeftOptions";

const sideLedtOptions = [
  { text: "Home", urlSrc: "/", Icon: HomeTwoToneIcon },
  { text: "Explore", urlSrc: "/explore", Icon: SearchOutlinedIcon },
  {
    text: "Notifications",
    urlSrc: "/notifications",
    Icon: Notif,
  },
  { text: "Messages", urlSrc: "/messages", Icon: MailOutlineTwoToneIcon },
  { text: "Bookmarks", urlSrc: "/bookmarks", Icon: TurnedInNotTwoToneIcon },
  { text: "Lists", urlSrc: "/lists", Icon: ListAltTwoToneIcon },
  { text: "Profile", urlSrc: "/moamlrh", Icon: PersonOutlineRoundedIcon },
];
function SidebarLeft() {
  const [activeOption, setActiveOption] = React.useState(false);
  const history = useHistory();
  return (
    <div className="sidebar-left" id="sidebar-left">
      <div className="sidebar-header">
        <div
          className="twitter-logo"
          id="options"
          onClick={() => history.push("/")}
        >
          <TwitterIcon className="logo" />
        </div>
        <div className="avatar"  id="options">
          <Avatar />
        </div>
      </div>
      {sideLedtOptions.map((option, index) => (
        <Link
          onClick={() => setActiveOption(option.text)}
          className="sidebar-options-link"
          key={index}
          to={option.urlSrc}
        >
          <SideLeftOptions
            text={option.text}
            Icon={option.Icon}
            activeOption={activeOption}
          />
        </Link>
      ))}
      <div className="sidebar-left-hom-menu">
        <Menu />
      </div>
      <div className="sidebar-left-tweet">
        <DialogTwett />
      </div>
      <div className="sidebar-left-avatar">
        <ProfileIcon />
      </div>
    </div>
  );
}

export default SidebarLeft;
