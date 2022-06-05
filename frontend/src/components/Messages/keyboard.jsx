import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChatFooter, ChatIcon } from "../../pages/Chat/style";
import { ChatMessage } from "./../../pages/Chat/style";
import _ from "lodash";
import { MdSend } from "react-icons/md";
import { GlobalContext } from "../../Context";

function Keyboard({ socket }) {
  const [message, setMessage] = useState("");
  const { setState } = useContext(GlobalContext);

  useEffect(() => {
    setState(socket);
  }, [socket]);

  // prettier-ignore
  const handleNewMessage = useCallback((e) => {
    e.preventDefault();

    if(_.isEmpty(message.trim())) return;

    socket.emit("chatMessage", message);
    setMessage("");
  }, [socket, message]);

  return (
    <ChatFooter onSubmit={handleNewMessage}>
      <ChatMessage
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        value={message}
        required
        placeholder="Digite aqui..."
      />
      <ChatIcon>
        <MdSend />
      </ChatIcon>
    </ChatFooter>
  );
}

export default memo(Keyboard);
