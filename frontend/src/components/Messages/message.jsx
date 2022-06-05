import React, { useMemo } from "react";
import {
  MessageContainer,
  MessageContent,
  MessageInfo,
  MessagePicture,
  MessageText,
  MessageTextContent,
  MessageTime,
  MessageUser,
  Picture,
} from "./style";

function Message({ image, username, time, text, currUser }) {
  // prettier-ignore
  const isSentByCurrentUser = useMemo(() => currUser === username, [currUser, username]);

  return (
    <MessageContainer sameUser={isSentByCurrentUser}>
      <MessagePicture>
        <Picture src={image} />
      </MessagePicture>

      <MessageContent sameUser={isSentByCurrentUser}>
        <MessageInfo>
          <MessageUser>{username}</MessageUser>
          <MessageTime>{time}</MessageTime>
        </MessageInfo>

        <MessageTextContent sameUser={isSentByCurrentUser}>
          <MessageText>{text}</MessageText>
        </MessageTextContent>
      </MessageContent>
    </MessageContainer>
  );
}

export default Message;
