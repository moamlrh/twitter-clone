import { Avatar } from "@material-ui/core";
import {
  ArrowBack,
  CalendarToday,
  EmojiEmotions,
  Gif,
  Image,
  InfoOutlined,
  SendOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AllMessagesBtwUsers from "./AllMessagesBtwUsers";
import "./MessageWithUserPage.css";
import FlipMove from "react-flip-move";
import { firestore } from "../../../firebase/config";
import { useCookies } from "react-cookie";

function MessageWithUserPage() {
  const [valueMsg, setValueMsg] = useState("");
  const activeUser = "id_user1";
  const { msg_user_id } = useParams();
  const [cookie] = useCookies();
  const history = useHistory();
  const handleSendBtnClicked = () => {
    firestore.collection("messages").add({
      msg: valueMsg,
      by: cookie.user,
    });
  };

  return (
    <div className="msg-with-user-page">
      <div className="with-user-header">
        <ArrowBack
          className="header-arr-back-icon"
          onClick={() => history.push("/messages")}
        />
        <Avatar className="header-avatar-icon" />
        <div className="user-info">
          <h4>Abbas hussein</h4>
          <span>@abosi33</span>
        </div>
        <InfoOutlined className="header-info-icon" />
      </div>
      <div className="with-user-body">
        <div className="user-name">
          <h3>Abbas Hussein</h3>
          <span>@abosi33</span>
        </div>
        <div className="user-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur repellendus
          </p>
          <div className="user-following">
            <h4>
              <span>28</span> Following
            </h4>
            <h4>
              <span>43</span> Followers
            </h4>
          </div>
          <div className="user-joined">
            <CalendarToday className="user-joined-icon" />
            <span>joined July 2019</span>
          </div>
        </div>
      </div>
      <div className="msg-with-user-messages">
        <FlipMove>
          <AllMessagesBtwUsers activeUser={activeUser} />
        </FlipMove>
      </div>
      <div className="with-user-input">
        <Image className="input-icon" />
        <Gif className="input-icon" />
        <div className="msg-input">
          <input
            placeholder="Start a new message"
            value={valueMsg}
            onChange={(e) => setValueMsg(e.target.value)}
          />
          <EmojiEmotions className="input-emoji-icon" />
        </div>
        <SendOutlined
          className="input-send-icon"
          onClick={handleSendBtnClicked}
        />
      </div>
    </div>
  );
}

export default MessageWithUserPage;
