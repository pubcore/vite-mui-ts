import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  username: string;
  token: string;
} | null;

const { reducer, actions } = createSlice({
  name: "authentication",
  initialState: null as SliceState,
  reducers: { setAuthentication: (s, { payload }) => payload },
});

export const { setAuthentication } = actions;
export default reducer;
