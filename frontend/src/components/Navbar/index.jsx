import React from "react";
import OPato from "../OPato";
import { NavbarContainer, NavbarWrapper, NavTitle } from "./style";

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <OPato />
        <NavTitle>Pato Chat</NavTitle>
        <OPato />
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
