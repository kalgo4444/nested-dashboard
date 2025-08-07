import React from "react";
import Tabs from "../../../../components/Tabs/Tabs";
import { Outlet } from "react-router-dom";

const TABS_LINKS = [
  {
    id: 1,
    name: "O'zbek Darslar",
    link: "",
  },
  {
    id: 2,
    name: "Rus Darslar",
    link: "russiansubjects",
  },
];

const Subjects = () => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-md">
      <Tabs tabs={TABS_LINKS} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Subjects);
