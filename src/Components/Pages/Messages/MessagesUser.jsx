import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { firestore } from "../../../firebase/config";

function MessagesUser() {
  const [cookie] = useCookies();
  const history = useHistory();
  const handleClickOnMessage = () => {
    history.push(`/messages/${cookie.user.uid}`);
  };

  return (
    <>
      <div className="msg-user" onClick={handleClickOnMessage}>
        <Avatar className="msg-use-avatar" />
        <div className="msg-user-info">
          <div className="msg-user-info-header">
            <h4>Abbas hussein</h4>
            <span>@abosi33</span>
            <p>Nov 7</p>
          </div>
          <div className="msg-user-last-msg">
            <p>hi moaml riad, waht's up bro !</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessagesUser;
