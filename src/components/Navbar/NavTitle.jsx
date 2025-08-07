import React from "react";
const NavTitle = ({ title }) => {
  return <h3 className="text-lg font-semibold">{title}</h3>;
};
export default React.memo(NavTitle);
