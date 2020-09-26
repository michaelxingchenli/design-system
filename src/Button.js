import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <>
      <button
        className={[
          "button__default",
          props.className,
          props.variant,
          props.disableShadow ? "disableShadow" : "",
        ].join(" ")}
      >
        {props.children}
      </button>
    </>
  );
}
