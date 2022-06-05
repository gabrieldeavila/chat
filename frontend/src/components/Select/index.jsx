import React from "react";
import Select from "react-select";
import { NoOptionsMessage, SelectStyle } from "./style";

function SelectWrapper({ options, onChange }) {
  return (
    <div>
      <Select
        onChange={onChange}
        options={options}
        defaultValue={options[0]}
        placeholder="Selecione..."
        styles={SelectStyle}
        components={{ NoOptionsMessage }}
      />
    </div>
  );
}

export default SelectWrapper;
