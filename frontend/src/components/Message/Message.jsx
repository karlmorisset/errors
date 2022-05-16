/* eslint-disable react/prop-types */
import React from "react";
import "./Message.css";

function Message({ message }) {
  return <div className="message">{message}</div>;
}

export default Message;
