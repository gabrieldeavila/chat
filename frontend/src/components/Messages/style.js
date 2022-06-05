import styled from "styled-components";
import { grey } from "../../helpers";
import { darkBlack } from "./../../helpers";

export const DivBottom = styled.div`
  margin-top: 10rem;
`;

export const MessageWrapper = styled.div`
  margin-top: 2rem;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${({ sameUser }) => (sameUser ? "row-reverse" : "row")};
`;

export const MessagePicture = styled.div``;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MessageContent = styled.div`
  padding-left: ${({ sameUser }) => (sameUser ? "0" : "1rem")};
  padding-right: ${({ sameUser }) => (!sameUser ? "0" : "1rem")};

  display: flex;
  flex-direction: column;
  align-items: ${({ sameUser }) => (sameUser ? "flex-end" : "flex-start")};
`;

export const MessageInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const MessageUser = styled.span`
  font-weight: 600;
  font-size: 11px;
  color: ${grey};
`;

export const MessageTime = styled(MessageUser)`
  font-weight: 200;
`;

export const MessageTextContent = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: ${({ sameUser }) =>
    sameUser ? "5px 0px 5px 5px" : "0px 5px 5px 5px"};
  background: ${grey};
`;

export const MessageText = styled.p`
  font-size: 12px;
  color: ${darkBlack};
  line-height: 1rem;
  font-weight: 500;
`;
