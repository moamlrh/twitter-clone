import { Avatar } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import React, { forwardRef } from "react";
import "./AllMessagesBtwUsers.css";

const AllMessagesBtwUsers = forwardRef(({ msg=2, activeUser },ref) => {
  return (
    <div ref={ref} className={`${msg.by === activeUser ? "activeUser" : "user_bro"}`}>
      <div className="msg">
        {msg.by !== activeUser && <Avatar />}
        <h4>{msg?.msg}</h4>
        <span>
          {msg?.time}
          <ArrowRight />
        </span>
      </div>
    </div>
  );
})
export default AllMessagesBtwUsers;
