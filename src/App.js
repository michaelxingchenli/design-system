import React from "react";
import "./App.css";
import Button from "./Button.js";

function App() {
  return (
    <>
      <div className="App">Buttons</div>

      <div>
        &lt;Button /&gt;
        <Button>Default</Button>
      </div>

      <div>
        &:hover, &:focus
        <Button className="hover">Default</Button>
      </div>

      <div>
        &lt;Button variant=&quot;outline&quot; /&gt;
        <Button variant="outline">Default</Button>
      </div>

      <div>
        &:hover, &:focus
        <Button className="hover" variant="outline">
          Default
        </Button>
      </div>

      <div>
        &lt;Button variant=&quot;text&quot; /&gt;
        <Button variant="text">Default</Button>
      </div>

      <div>
        &:hover, &:focus
        <Button className="hover" variant="text">
          Default
        </Button>
      </div>

      <div>
        &lt;Button disableShadow; /&gt;
        <Button disableShadow>Default</Button>
      </div>
    </>
  );
}

export default App;
