import React from "react";
import Tabs from "../../../../components/Tabs/Tabs";
import { Outlet } from "react-router-dom";

const TABS_LINKS = [
  {
    id: 1,
    name: "First Time Payment",
    link: "",
  },
  {
    id: 2,
    name: "Full Time Payment",
    link: "full-time-payment",
  },
  {
    id: 3,
    name: "Last Time Payment",
    link: "last-time-payment",
  },
];

const Payment = () => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-md">
      <Tabs tabs={TABS_LINKS} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Payment);
