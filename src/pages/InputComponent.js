import React from "react";
import PropTypes from "prop-types";
import Input from "../components/Input";

function InputComponent() {
  return (
    <>
      <h2>Input</h2>
      <div>
        <code>&lt;Input /&gt;</code>
        <br />
        <Input label="Label" placeholder="placeholder" />
      </div>
      <div>
        <code>&lt;Input success /&gt;</code>
        <br />
        <Input label="Label" placeholder="placeholder" success />
      </div>
      <div>
        <code>&lt;Input error /&gt;</code>
        <br />
        <Input label="Label" placeholder="placeholder" error />
      </div>
      <div>
        <code>&lt;Input warning /&gt;</code>
        <br />
        <Input label="Label" placeholder="placeholder" warning />
      </div>
      <div>
        <code>&lt;Input disabled /&gt;</code>
        <br />
        <Input label="Label" placeholder="placeholder" disabled />
      </div>
    </>
  );
}

InputComponent.propTypes = {};

export default InputComponent;
