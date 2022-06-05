import React, { useCallback, useRef, useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import Message from "./message";
import { DivBottom, MessageWrapper } from "./style";

function Messages({ state, socket }) {
  const { user, type } = state || {};
  const firstRender = useRef(true);

  const pageBottomRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const outputUsers = useCallback((users) => {
    setUsers(users);
  }, []);

  const outputMessage = useCallback((message) => {
    // console.log(message);
    setMessages((currState) => [...currState, message]);
    const el = pageBottomRef.current;
    el.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    handleSocket();
  }, [user, type]);

  const handleSocket = useCallback(() => {
    // Join chatroom
    socket.emit("joinRoom", { username: user, room: type });

    // Get room and users
    socket.on("roomUsers", ({ users }) => {
      outputUsers(users);
    });

    // Message from server
    socket.on("message", (message) => {
      outputMessage(message);
    });
  }, [user, type]);

  return (
    <MessageWrapper>
      {messages.map((msg, index) => (
        <Message currUser={user} key={index} {...msg} />
      ))}

      <DivBottom />
      <div ref={pageBottomRef}></div>
    </MessageWrapper>
  );
}

export default memo(Messages);
