import React from "react";
import { useLocation } from "react-router-dom";
const ContentTitle = () => {
  const { pathname } = useLocation();
  const title = pathname.split("/")[2];
  switch (title) {
    case undefined:
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Dashboard
        </h2>
      );
    case "timetable":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Dars Jadvali
        </h2>
      );
    case "subjects":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Fanlar
        </h2>
      );
    case "eduplan":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          O‘quv parametrlari
        </h2>
      );
    case "attendance":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Davomat
        </h2>
      );
    case "payment":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Moliyaviy to‘lov
        </h2>
      );
    case "folders":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Hujjatlar
        </h2>
      );
    case "library":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Elektron kutubxona
        </h2>
      );
    case "settings":
      return (
        <h2 className="text-2xl font-semibold bg-white px-4 py-3 rounded-xl shadow-md">
          Sozlamalar
        </h2>
      );
    case "help":
      return (
        <h2 className="text-2xl font-semiboldbg-white px-4 py-3 rounded-xl shadow-md">
          Yordam & yo‘riqnoma
        </h2>
      );
    default:
      break;
  }
  return <h2>{title}</h2>;
};
export default React.memo(ContentTitle);
