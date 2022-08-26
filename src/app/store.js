import { configureStore } from "@reduxjs/toolkit";

import gifFeaturedReducer from "../features/gifFeatured/gifFeaturedSlice";
import gifTrendReducer from "../features/gifTrend/gifTrendSlice";
import gifSearchReducer from "../features/gifSearch/gifSearchSlice";
export const store = configureStore({
  reducer: {
    gifFeatured: gifFeaturedReducer,
    gifTrend: gifTrendReducer,
    gifSearch: gifSearchReducer,
  },
});
