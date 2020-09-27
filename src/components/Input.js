import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";
function Input(props) {
  return (
    <>
      <label
        className={[
          "sl-label",
          props.error ? "error" : "",
          props.success ? "success" : "",
          props.warning ? "warning" : "",
        ].join(" ")}
      >
        {props.label}
        <input
          className={[
            "sl-input",
            props.error ? "error" : "",
            props.success ? "success" : "",
            props.warning ? "warning" : "",
          ].join(" ")}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </label>
    </>
  );
}

Input.propTypes = {};

export default Input;
