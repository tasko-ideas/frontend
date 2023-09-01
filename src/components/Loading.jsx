import React from "react";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { RightOutlined } from "@ant-design/icons";
import ProyectosList from "./ProyectosList";
import ViewSelector from "./Views/viewSelector";
import ColumnSkeleton from "./Skeletons/ColumnSkeleton";

const Loading = () => {
  return (
    <>
      <Sider
        style={{
          textAlign: "center",
          lineHeight: "60px",
          color: "#fff",
          backgroundColor: "white",
          boxShadow: "14px 4px 14px 6px rgba(245,245,245,0.57)",
        }}
      >
        <ProyectosList />
        <RightOutlined />
      </Sider>
      <Content>
        <ViewSelector view="General" />

        <div
          style={{
            marginLeft: "50px",
            display: "flex",
            gap: "2rem",
            justifyContent: "left",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          <ColumnSkeleton />
          <ColumnSkeleton />
          <ColumnSkeleton />
        </div>

      </Content>
    </>
  );
};

export default Loading;
