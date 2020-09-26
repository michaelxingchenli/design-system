import React from "react";
import Button from "../components/Button";

const ButtonComponent = () => {
  return (
    <>
      <h1 className="buttonsComponent">Buttons</h1>

      <div className="row">
        <div className="col-6">
          <code>&lt;Button /&gt;</code>
          <Button>Default</Button>
        </div>

        <div className="col-6">
          <code>&:hover, &:focus</code>
          <Button className="hover">Default</Button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <code>&lt;Button variant=&quot;outline&quot; /&gt;</code>
          <Button variant="outline">Default</Button>
        </div>

        <div className="col-6">
          <code>&:hover, &:focus</code>
          <Button className="hover" variant="outline">
            Default
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <code>&lt;Button variant=&quot;text&quot; /&gt;</code>
          <Button variant="text">Default</Button>
        </div>

        <div className="col-6">
          <code>&:hover, &:focus</code>
          <Button className="hover" variant="text">
            Default
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <code>&lt;Button disableShadow /&gt;</code>
          <Button disableShadow>Default</Button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <code>&lt;Button disabled /&gt;</code>
          <Button disabled>Default</Button>
        </div>

        <div className="col-6">
          <code>&lt;Button variant=&quot;text&quot; disabled /&gt;</code>
          <Button variant="text" disabled>
            Default
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <code>
            &lt;Button startIcon=&quot;local_grocery_store&quot; /&gt;
          </code>
          <Button variant="text" startIcon="local_grocery_store">
            Default
          </Button>
        </div>

        <div className="col-6">
          <code>&lt;Button endIcon=&quot;local_grocery_store&quot; /&gt;</code>
          <Button variant="text" endIcon="local_grocery_store">
            Default
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <code>&lt;Button size=&quot;sm&quot; /&gt;</code>
          <Button size="sm">Default</Button>
        </div>

        <div className="col-4">
          <code>&lt;Button size=&quot;md&quot; /&gt;</code>
          <Button size="md">Default</Button>
        </div>

        <div className="col-4">
          <code>&lt;Button size=&quot;lg&quot; /&gt;</code>
          <Button size="lg">Default</Button>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <code>&lt;Button color=&quot;default&quot; /&gt;</code>
          <Button color="default">Default</Button>
        </div>

        <div className="col-4">
          <code>&lt;Button color=&quot;primary&quot; /&gt;</code>
          <Button color="primary">Default</Button>
        </div>

        <div className="col-4">
          <code>&lt;Button color=&quot;secondary&quot; /&gt;</code>
          <Button color="secondary">Default</Button>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <code>&:hover, &:focus</code>
          <Button color="default" className="hover">
            Default
          </Button>
        </div>

        <div className="col-4">
          <code>&:hover, &:focus</code>
          <Button color="primary" className="hover">
            Default
          </Button>
        </div>

        <div className="col-4">
          <code>&:hover, &:focus</code>
          <Button color="secondary" className="hover">
            Default
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonComponent;
