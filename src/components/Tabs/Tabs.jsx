import React from "react";
import { NavLink } from "react-router-dom";
const Tabs = ({ tabs }) => {
  return (
    <div>
      <ul className="flex items-center my-2 py-1.5 border-b border-gray-200">
        {tabs?.map((tab) => (
          <li key={tab.id}>
            <NavLink
              end={true}
              to={tab.link}
              className={"tabs__link py-2 px-4 rounded-t-md"}
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Tabs);
