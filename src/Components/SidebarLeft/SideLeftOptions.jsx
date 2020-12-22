import React from "react";

export default function SideLeftOptions({ text, Icon, activeOption }) {
  return (
    <div
      className="sidebar-left-home" id="options"
      style={{ color: activeOption === text && "#00a2ff" }}
    >
      <Icon style={{ fontSize: "29px" }} />
      <strong>{text}</strong>
    </div>
  );
}
