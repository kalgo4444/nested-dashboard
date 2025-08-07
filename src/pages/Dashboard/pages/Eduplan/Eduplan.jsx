import React from "react";
import Tabs from "../../../../components/Tabs/Tabs";
import { Outlet } from "react-router-dom";

const TABS_LINKS = [
  {
    id: 1,
    name: "Kunduzgi talim",
    link: "",
  },
  {
    id: 2,
    name: "Sirtqi talim",
    link: "correspondence",
  },
];

const Eduplan = () => {
  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow-md">
      <Tabs tabs={TABS_LINKS} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Eduplan);
