import React from "react";
import {
  Divider, Form, Radio, Skeleton, Space, Switch,
} from "antd";

function ColumnSkeleton() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        width: "282px",
        minHeight: "76px",
        borderRadius: "10px",
        padding: "12px 26px 16px 26px",
      }}
    >
      <Skeleton.Button style={{ backgroundColor: "#FBF4F4" }} active block />
      <br />
      <br />
      <Skeleton.Button style={{ backgroundColor: "#FBF4F4" }} active block />
      <br />
      <br />
      <Skeleton.Button style={{ backgroundColor: "#FBF4F4" }} active block />
    </div>
  );
}

export default ColumnSkeleton;
