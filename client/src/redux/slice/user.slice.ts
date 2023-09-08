import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";

interface User {
  id: number;
  name: string;
  surname: string;
  topic: string;
  phoneNumber: string;
  photos: { imageUrl: string; imageThumbUrl: string }[];
  nails: number;
  description: string;
  avatar: string;
  email: string;
}

export type { User };

interface IState {
  user: User | null;
}

const initialState: IState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
