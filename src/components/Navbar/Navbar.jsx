import React from "react";
import NavTitle from "./NavTitle";
import NavUser from "./NavUser";

const Navbar = () => {
  return (
    <nav className="w-full h-16 sticky top-0 left-0 border-b border-neutral-300 px-10 flex items-center justify-between bg-white">
      <NavTitle title={"ATRrus-24-3"} />
      <NavUser name={"Abdulaziz"} />
    </nav>
  );
};

export default React.memo(Navbar);
