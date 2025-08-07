import { configureStore } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export default configureStore({
  reducer: {
    data,
  },
});
