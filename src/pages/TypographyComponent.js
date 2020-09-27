import React from "react";
import PropTypes from "prop-types";

function TypographyComponent(props) {
  return (
    <>
      <h2>Typography</h2>

      <h1>h1. Heading</h1>
      <h2>h2. Heading</h2>
      <h3>h3. Heading</h3>
      <h4>h4. Heading</h4>
      <h5>h5. Heading</h5>
      <h6>h6. Heading</h6>
      <p>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </p>
      <caption>caption text</caption>
      <outline>overline text</outline>
    </>
  );
}

TypographyComponent.propTypes = {};

export default TypographyComponent;
