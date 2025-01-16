import { configureStore } from "@reduxjs/toolkit";
import myCardsReducer from "../features/myCardsSlice";

const store = configureStore({
  reducer: {
    myCards: myCardsReducer,
  },
});

export default store;
