import { Message, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import MobileNavbar from "../../Body/utili/MobileNavbar";
import "./MessagesPage.css";
import MessagesUser from "./MessagesUser";
import { auth, firestore } from "../../../firebase/config";
import { useCookies } from "react-cookie";
function MessagesPage() {
  const [allMessages, setMessages] = useState([]);
  const [cookie] = useCookies();
  useEffect(() => {
    const arr = [];
    firestore
      .collection("messages")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          arr.push(doc.data());
        });
      });
    setMessages([...arr]);
  },[]);
  return (
    <div className="messages-page">
      <div className="message-header">
        <h3>Messages</h3>
        <Message className="msg-header-icon" />
      </div>
      <div className="message-search">
        <Search className="msg-search-icon" />
        <input placeholder="Search for people and groups" />
      </div>
      <div className="message-users">
        {allMessages.map((msg, i) => {
          return <MessagesUser key={i} msg={msg} />;
        })}
      </div>
      <MobileNavbar />
    </div>
  );
}

export default MessagesPage;
