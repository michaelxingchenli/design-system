import React from "react";
import PropTypes from "prop-types";
import "./ColorBlock.scss";

function ColorBlock({ color }) {
  return <span className={["colorBlock", color].join(" ")}>${color}</span>;
}

ColorBlock.propTypes = {};

export default ColorBlock;
