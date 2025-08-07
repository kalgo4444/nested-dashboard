import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full fixed top-0 left-0 bg-gray-200 h-20">
      <nav className="h-full container mx-auto px-5 flex items-center justify-between">
        <div>
          <Logo link={"/"} />
        </div>
        <button
          className="px-3 py-1.5 bg-white rounded-md hover:bg-neutral-100 transition-colors cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Sign up
        </button>
      </nav>
    </header>
  );
};

export default React.memo(Header);
