import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
 
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
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    PaperProps={{
      style: {
        backgroundColor: "grey",
        boxShadow: "5px 1px 20px rgb(40, 52, 63)",
        background: "#15202b",
        color: "white",
        margin: "0",
        padding: "0",
        border:0,
      },
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
      margin:"10px 5px",

  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="sidebar-left-home" onClick={handleClick}>
        <MoreHorizIcon onClick={handleClick} fontSize="small" />
        <strong>More</strong>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <ForumOutlinedIcon style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText  primary="Topics" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <FlashOnIcon  style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText primary="Moments" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <LaunchTwoToneIcon style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText primary="Twitter Ads" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <EqualizerRoundedIcon style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </StyledMenuItem>
        <hr />
        <StyledMenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText primary="Settings and Privacy" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <HelpOutlineIcon style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AspectRatioIcon style={{ fontSize: "23px", color:"rgb(78, 93, 104)" }} />
          </ListItemIcon>
          <ListItemText primary="Display" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
