import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./slice/DataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
