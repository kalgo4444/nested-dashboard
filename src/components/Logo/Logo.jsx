import React from "react";
import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";

const Logo = ({ link }) => {
  return (
    <h2 className="">
      <Link
        to={link}
        className="text-2xl font-semibold flex items-center gap-2"
      >
        <span className="text-3xl">
          <GrContactInfo />
        </span>
        <span>Dashboard</span>
      </Link>
    </h2>
  );
};

export default React.memo(Logo);
