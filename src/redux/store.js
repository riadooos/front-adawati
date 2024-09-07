import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slice/articleSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
