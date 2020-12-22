import React from "react";
import { Avatar } from "@material-ui/core";
import "./WhoToFollow.css";
import { ProfileDailog } from "../Posts/ProfileDailog";

function WhoToFollow() {
  const { handleClick, renderMenu } = ProfileDailog();
  return (
    <>
      {renderMenu}
      <div className="how-to-follow-persons">
        <div className="persons-info ">
          <Avatar className="perosons-avtar show-pop-up-user" />
          <div
            className="persons-info-name show-pop-up-user"
            onMouseEnter={(event) =>
              handleClick(event, { name: "Ali Rajy", user: "alirajy" })
            }
          >
            <strong>Ali Rajy</strong>
            <p>@alirajy</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </>
  );
}

export default WhoToFollow;
