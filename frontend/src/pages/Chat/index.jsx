import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../../assets/base";
import { ChatTitle } from "./style";
import _ from "lodash";
import Messages from "../../components/Messages";
import { io } from "socket.io-client";
import Keyboard from "../../components/Messages/keyboard";

function Chat() {
  const firstRender = useRef(true);

  const navigate = useNavigate();

  const { state = {} } = useLocation();

  // se não tiver nada no state, redireciona para home
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (_.isEmpty(state)) {
      navigate("/", { replace: true });
    }
  }, [state]);

  const socket = io("http://localhost:3001", {
    withCredentials: true,
  });

  return (
    <Container>
      <ChatTitle>{state?.type}</ChatTitle>

      <Messages state={state} socket={socket} />

      <Keyboard socket={socket} />
    </Container>
  );
}

export default memo(Chat);
