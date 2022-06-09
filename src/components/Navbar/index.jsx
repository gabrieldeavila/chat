import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context";
import OPato from "../OPato";
import { NavbarContainer, NavbarWrapper, NavTitle } from "./style";

function Navbar() {
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);

  const handleNavigate = useCallback(() => {
    navigate("/", { replace: true });
    state.emit("disconnect");
  }, []);

  return (
    <NavbarWrapper onClick={handleNavigate}>
      <NavbarContainer>
        <OPato />
        <NavTitle>Pato Chat</NavTitle>
        <OPato />
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
