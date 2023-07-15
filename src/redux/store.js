import { configureStore } from "@reduxjs/toolkit";

import { carouselItems, flatCardItems, mediators, theme } from "./entities";

const store = configureStore({
  reducer: {
    theme: theme.reducer,
    carouselItems: carouselItems.reducer,
    mediators: mediators.reducer,
    flatCardItems: flatCardItems.reducer,
  },
});

export default store;
