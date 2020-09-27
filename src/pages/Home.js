import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <>
      <h2>Welcome to SF design system React </h2>
      <p>
        <b>Icons: </b>
        we use{" "}
        <a href="https://google.github.io/material-design-icons/">
          Material Icons
        </a>
      </p>
    </>
  );
}

Home.propTypes = {};

export default Home;
