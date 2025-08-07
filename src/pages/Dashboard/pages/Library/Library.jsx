import React from "react";
import Tabs from "../../../../components/Tabs/Tabs";
import { Outlet } from "react-router-dom";

const TABS_LINK = [
  {
    id: 1,
    name: "Barcha kitoblar",
    link: "",
  },
  {
    id: 2,
    name: "Oxirgi ogirganlar",
    link: "lastread",
  },
];

const Library = () => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-md">
      <Tabs tabs={TABS_LINK} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Library);
