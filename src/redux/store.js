import { configureStore } from "@reduxjs/toolkit";

import { theme } from "./entities";

const store = configureStore({
  reducer: {
    theme: theme.reducer,
  },
});

export default store;
