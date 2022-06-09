import { components } from "react-select";
import { grey } from "../../helpers";
import { darkBlack } from "./../../helpers";

export const SelectStyle = {
  control: (base = {}, state = {}) => ({
    ...base,
    backgroundColor: grey,
    width: "100%",
    border: "none",
    boxShadow: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  option: (base = {}) => ({
    ...base,
    cursor: "pointer",
  }),
  input: (base = {}, state = {}) => ({
    ...base,
    height: "25px",
    width: "100%",
    boxShadow: "none",
  }),
  valueContainer: (base = {}, state = {}) => ({
    ...base,
    padding: "1rem",
    outline: "none",
  }),
  singleValue: (base = {}, state = {}) => ({
    ...base,
    color: darkBlack,
    height: "fit-content",
    margin: "0px",
  }),
  placeholder: (base = {}, state = {}) => ({
    ...base,
    textAlign: "left",
  }),
  dropdownIndicator: (base = {}, state = {}) => ({
    ...base,
    color: darkBlack,
  }),
  menu: (provided = {}) => ({
    ...provided,
    zIndex: 3,
    borderBottom: "1px dotted pink",
  }),
};

export const NoOptionsMessage = (props) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span>Nenhuma opção encontrada</span>
    </components.NoOptionsMessage>
  );
};
