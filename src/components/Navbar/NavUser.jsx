import React from "react";

const NavUser = ({ name }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-semibold">{name}</span>
      <div>
        <div className="size-10 rounded-full bg-blue-500 text-xl flex items-center justify-center text-white font-semibold">
          {name.split("")[0]}
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavUser);
