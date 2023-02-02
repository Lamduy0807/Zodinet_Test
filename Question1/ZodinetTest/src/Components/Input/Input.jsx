import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";
const Input = ({ name, placeholder, value, type, onChange }) => {
  return (
    <div className="input">
      <div className="input__name">
        <span>{name}</span>
      </div>
      <div className="input__content">
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
Input.defaultProps = {
  name: "",
  placeholder: "",
  value: "",
  type: "",
  onChange: () => {},
};
export default Input;
