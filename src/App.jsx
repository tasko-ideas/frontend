import React, { useEffect, useState } from "react";
import { Layout, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/Login";
import ProyectosList from "./components/ProyectosList";
import Loading from "./components/Loading";
import CalendarView from "./components/calendarView/calendarView";

function App() {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout style={{ backgroundColor: "rgb(0,21,41)", height: "100vh" }}>
        {!user && <Login setUser={setUser} setLoading={setLoading} />}
        {user && (
          <>
            <Header
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "0 0 10px 10px",
                margin: "15px 0",
              }}
            >
              <Navbar user={user} setUser={setUser} />
            </Header>
            {loading ? (
              <Loading />
            ) : (
              <Layout hasSider>
                <Sider
                  style={{
                    textAlign: "center",
                    lineHeight: "60px",
                    color: "#fff",
                    backgroundColor: "#3ba0e9",
                    boxShadow: "2px 2px 2px #3ba0e9",
                  }}
                >
                  <ProyectosList />
                </Sider>
                <CalendarView />
              </Layout>
            )}
          </>
        )}
      </Layout>
    </Space>
  );
}

export default App;
