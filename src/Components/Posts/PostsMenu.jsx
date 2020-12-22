import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import BlockIcon from '@material-ui/icons/Block';
import CodeIcon from '@material-ui/icons/Code';
import FlagIcon from '@material-ui/icons/Flag';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const PostMenus = [
  { text: "Not interested in this Tweet", icon: SentimentVeryDissatisfiedIcon },
  { text: "Add/remove from Lists", icon: PostAddIcon },
  { text: "Mute @Dalilk4ielts", icon: VolumeOffIcon },
  { text: "Block @Dalilk4ielts", icon: BlockIcon },
  { text: "Embed Tweet", icon: CodeIcon },
  { text: "Report Tweet", icon: FlagIcon },
  { text: "View hidden replies", icon: VisibilityOffIcon },
];

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
        horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    PaperProps={{
      style: {
        backgroundColor: "grey",
        boxShadow: "5px 1px 20px rgb(40, 52, 63)",
        background: "#15202b",
        color: "white",
        margin: "0",
        padding: "0",
        border: 0,
      },
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    margin: "10px 5px",
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <>
      <MoreHorizIcon
        className="header-icon"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      />
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {PostMenus.map((Menu, index) => {
          return (
            <StyledMenuItem key={index}>
              <ListItemIcon>
                <Menu.icon
                  style={{ fontSize: "23px", color: "rgb(78, 103, 104)" }}
                />
              </ListItemIcon>
              <ListItemText primary={Menu.text} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </>
  );
}
