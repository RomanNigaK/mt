import { createSlice } from "@reduxjs/toolkit";

interface Message {
  id: number;
  data: string;
  image: null | string;
  msg: string;
  title: string;
  user: string;
}

interface IState {
  city: string;
  page: number;
  messages: Message[];
  currentError: string;
}

const initialState: IState = {
  city: "Сочи",
  page: 0,
  messages: [],
  currentError: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      state.page = 0;
    },
    addMessage: (state, action) => {
      const { result, city, page } = action.payload;

      console.log("page", page);

      if (!page) {
        state.messages = result.reverse();
      } else {
        state.messages = result.reverse().concat(state.messages);
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setErrorApp: (state, action) => {
      state.currentError = action.payload;
    },
  },
});

export const { setCity, addMessage, setPage, setErrorApp } = appSlice.actions;
export default appSlice.reducer;
