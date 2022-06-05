import styled from "styled-components";
import { darkBlack } from "../../helpers";

export const NavbarContainer = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  background: ${darkBlack};
  color: white;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;

  &:hover ${NavbarContainer} {
    transform: rotate(180deg);
  }
`;

export const NavTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
`;
