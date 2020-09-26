import React from "react";
import "./GridComponent.css";
import "../style/grid.css";

function GridComponnet(props) {
  return (
    <>
      <div className="grid-display">
        <div className="row">
          <div className="col-1">
            <p>one</p>
          </div>
          <div className="col-11">
            <p>eleven</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <p>two</p>
          </div>
          <div className="col-10">
            <p>ten</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>three</p>
          </div>
          <div className="col-9">
            <p>nine</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>four</p>
          </div>
          <div className="col-8">
            <p>eight</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p>five</p>
          </div>
          <div className="col-7">
            <p>seven</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>six</p>
          </div>
          <div className="col-6">
            <p>six</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>twelve</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridComponnet;
