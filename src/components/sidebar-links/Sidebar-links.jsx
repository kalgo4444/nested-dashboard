import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLinks = ({ links }) => {
  return (
    <ul className="flex flex-col gap-2">
      {links?.map((link) => (
        <li key={link?.id}>
          <NavLink
            end={true}
            to={link?.link}
            className="nav_active text-gray-500 block py-2.5 duration-150 hover:bg-neutral-100 hover:text-black rounded indent-5"
          >
            <span>{link?.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SidebarLinks);
