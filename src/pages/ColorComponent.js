import React from "react";
import PropTypes from "prop-types";
import ColorBlock from "../components/ColorBlock";

function ColorComponent(props) {
  return (
    <>
      <h2>Color</h2>

      <div>
        <ColorBlock color="primary">Primary Color</ColorBlock>
        <ColorBlock color="primaryHover">Primary Color</ColorBlock>
      </div>

      <div>
        <ColorBlock color="secondary">Primary Color</ColorBlock>
        <ColorBlock color="secondaryHover">Primary Color</ColorBlock>
      </div>

      <div>
        <ColorBlock color="grey1">Grey1</ColorBlock>
        <ColorBlock color="grey2">Grey2</ColorBlock>
        <ColorBlock color="grey3">Grey3</ColorBlock>
        <ColorBlock color="grey4">Grey4</ColorBlock>
      </div>

      <div>
        <ColorBlock color="warning">warning</ColorBlock>
        <ColorBlock color="danger">danger</ColorBlock>
        <ColorBlock color="success">success</ColorBlock>
      </div>
    </>
  );
}

ColorComponent.propTypes = {};

export default ColorComponent;
