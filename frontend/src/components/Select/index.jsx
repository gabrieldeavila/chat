import React from "react";
import Select from "react-select";
import { NoOptionsMessage, SelectStyle } from "./style";

function SelectWrapper() {
  return (
    <div>
      <Select
        placeholder="Selecione..."
        styles={SelectStyle}
        components={{ NoOptionsMessage }}
      />
    </div>
  );
}

export default SelectWrapper;
