import React from "react";
import Tabs from "../../../../components/Tabs/Tabs";
import { Outlet } from "react-router-dom";
const TABS_LINKS = [
  {
    id: 1,
    name: "Asosiy Darslar",
    link: "",
  },
  {
    id: 2,
    name: "Qoshimcha Darslar",
    link: "additionallessons",
  },
];

const Timetable = () => {
  return (
    <div className="my-4 p-4 bg-white rounded-md shadow-md">
      <Tabs tabs={TABS_LINKS} />
      <Outlet />
    </div>
  );
};

export default React.memo(Timetable);
