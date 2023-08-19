import React from "react";
import { Radio } from "antd";

const ViewSelector = ({ view, handleChange }) => {
  return (
    <div style={{ margin: "10px auto", width: "70vw" }}>
      <Radio.Group buttonStyle="solid" value={view} onChange={handleChange}>
        <Radio.Button style={{ margin: "0 5px" }} value="General">
          General
        </Radio.Button>
        <Radio.Button style={{ margin: "0 5px" }} value="Calendar">
          Calendar
        </Radio.Button>
        <Radio.Button style={{ margin: "0 5px" }} value="Roadmap">
          Roadmap
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default ViewSelector;
