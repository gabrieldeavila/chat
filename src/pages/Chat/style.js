import styled from "styled-components";
import { grey } from "../../helpers";
import { darkBlack } from "./../../helpers";
import { BoxShadow } from "./../../assets/mixins";

export const ChatTitle = styled.h1`
  text-align: center;
  color: ${grey};
  font-weight: 600;
  font-size: 24px;
`;

export const ChatFooter = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: ${darkBlack};
  height: calc(55px + 1rem);

  padding: 0 5rem;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

export const ChatMessage = styled.input`
  width: 90%;
  border: none;
  outline: none;
  background: ${grey};
  padding: 0.75rem;

  border-radius: 5px;

  ${BoxShadow};
`;

export const ChatIcon = styled.button`
  width: 10%;
  display: flex;
  border: none;
  background: none;
  justify-content: center;
  align-items: flex-end;

  svg {
    font-size: 30px;
    cursor: pointer;
    color: ${grey};
  }
`;
