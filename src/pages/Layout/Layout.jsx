import React from "react";
import { Outlet } from "react-router-dom";
const Header = React.lazy(() => import("../../components/Header/Header"));

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default React.memo(Layout);
