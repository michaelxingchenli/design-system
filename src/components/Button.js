import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <>
      <button
        className={[
          "sf-button",
          props.className,
          props.variant,
          props.size,
          props.color,
          props.disableShadow || props.startIcon || props.endIcon || props.size
            ? "disableShadow"
            : "",
        ].join(" ")}
        disabled={props.disabled}
      >
        {props.startIcon ? (
          <i className="material-icons startIcon">{props.startIcon}</i>
        ) : (
          ""
        )}
        {props.children}
        {props.endIcon ? (
          <i className="material-icons endIcon">{props.endIcon}</i>
        ) : (
          ""
        )}
      </button>
    </>
  );
}
