import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API } from "../../API/axios";
import {
  API_KEY,
  EVENT,
  LIMIT,
  MEDIA_FILE_TYPE,
  NEXT,
  STATUS,
} from "../../constants";
const initialState = {
  gif: [],
  status: null,
  next: null,
};

export const getGif = createAsyncThunk(
  "featured/getGif",
  async (_, thunkAPI) => {
    const next = thunkAPI.getState().gifFeatured.next;

    const response =
      next === null
        ? await API.get(
            `${EVENT.FEATURED}${API_KEY}${LIMIT}10${MEDIA_FILE_TYPE.GIF}`
          )
        : await API.get(
            `${EVENT.FEATURED}${API_KEY}${LIMIT}10${MEDIA_FILE_TYPE.GIF}${NEXT}${next}`
          );

    const data = await response.data;
    return { gif: data.results, next: data.next };
  }
);
export const gifSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    setNext: (state, { payload }) => {
      return { ...state, next: payload };
    },
    getState: (state) => {
      return { ...state };
    },
  },
  extraReducers: {
    [getGif.pending]: (state) => {
      return { ...state, status: STATUS.LOADING };
    },
    [getGif.fulfilled]: (state, { payload }) => {
      const next = payload.next;
      const gif = [...state.gif, ...payload.gif];
      const status = STATUS.SUCCESS;
      return { ...state, next, gif, status };
    },
    [getGif.rejected]: (state) => {
      return { ...state, status: STATUS.ERROR };
    },
  },
});
export const selectFeaturedNext = ({ gifFeatured }) => gifFeatured.next;
export const selectFeaturedStatus = ({ gifFeatured }) => gifFeatured.status;
export const { update, setNext, getState } = gifSlice.actions;
export default gifSlice.reducer;
