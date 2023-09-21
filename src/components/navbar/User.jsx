import React from "react";

const User = ({ usuario }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img
        width="25"
        src="/assets/img/avatarDefault.png"
        alt="avatar"
        style={{ border: "1px solid grey", borderRadius: "100%" }}
      />
      {usuario.fullname}
    </div>
  );
};

export default User;
