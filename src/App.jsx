import React, { useEffect, useState } from "react";
import { Layout, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { RightOutlined } from "@ant-design/icons";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
/* import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { compress, decompress } from "lz-string"; */

import Navbar from "./components/navbar/Navbar";
import ProyectosList from "./components/ProyectosList";
import Loading from "./components/Loading";
import Welcome from "./components/welcome/Welcome";
import ProyectosView from "./components/Views/ProyectosView";


function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(false);

  const queryClient = new QueryClient();

  // revisar documentacion de persistentQueryClient: https://tanstack.com/query/v4/docs/react/plugins/createSyncStoragePersister#serialize-and-deserialize-options
  /* {
    defaultOptions: { queries: { staleTime: Infinity } },
  } */
  /* persistQueryClient({
    queryClient: queryClient,
    persister: createSyncStoragePersister({
      storage: window.localStorage,
      serialize: (data) => compress(JSON.stringify(data)),
      deserialize: (data) => JSON.parse(decompress(data)),
    }),
    maxAge: Infinity,
  });
 */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <QueryClientProvider client={queryClient}>

        <Layout style={{ backgroundColor: "#f0f3f4" }}>

          {!user && <Welcome setUser={setUser} setLoading={setLoading} />}
          {user && (
            <>
              <Header
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#EC6F4F",
                  padding: "0 10px",
                  height: "48px",
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
                      backgroundColor: "white",
                      boxShadow: "14px 4px 14px 6px rgba(245,245,245,0.57)",
                    }}
                  >
                    <ProyectosList />
                    <RightOutlined />
                  </Sider>
                  <ProyectosView />
                </Layout>
              )}
            </>
          )}
        </Layout>
      </QueryClientProvider>
    </Space>
  );
}

export default App;
