import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";

const Login = () => {
  const focusRef = React.useRef(null);
  React.useEffect(() => {
    focusRef.current.focus();
  }, []);
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full border p-2 rounded-md flex flex-col gap-3"
      >
        <h2 className="text-center text-3xl font-bold">Sign Up</h2>
        <input
          ref={focusRef}
          className="border outline-0 h-12 indent-5 text-lg rounded-md mt-5 hover:border-blue-500 focus:border-blue-500 focus:border-2 duration-200"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="border outline-0 h-12 indent-5 text-lg rounded-md hover:border-blue-500 focus:border-blue-500 focus:border-2 duration-200"
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className="flex items-center gap-2.5 my-10">
          <button
            onClick={() => nav("/dashboard")}
            className="bg-blue-500 h-10 hover:bg-blue-600 duration-150 text-white rounded  px-3 py-1.5 w-1/2 cursor-pointer flex items-center gap-2 justify-center"
            type="submit"
          >
            <span>
              <IoLogOutOutline className="text-2xl" />
            </span>
            <span>Sign up</span>
          </button>
          <button
            className="bg-blue-500 h-10 hover:bg-blue-600 duration-150 text-white rounded px-3 py-1.5 w-1/2 cursor-pointer flex items-center gap-2 justify-center"
            onClick={() => nav(-1)}
            type="button"
          >
            <span>
              <RiArrowGoBackFill className="text-2xl" />
            </span>
            <span>Go Back</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default React.memo(Login);
