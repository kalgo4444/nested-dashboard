import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default React.memo(Auth);
