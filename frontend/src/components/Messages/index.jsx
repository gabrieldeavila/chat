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
    // Entra no chat
    socket.emit("joinRoom", { username: user, room: type });

    // Pega a sala e usuários
    socket.on("roomUsers", ({ users }) => {
      outputUsers(users);
    });

    // Recebe mensagem do server
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
