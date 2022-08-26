import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/axios";
import { API_KEY, EVENT, LIMIT, MEDIA_FILE_TYPE, NEXT } from "../../constants";
const initialState = {
  gif: [],
  searchTerm: "",
  status: null,
  next: null,
};

export const getIt = createAsyncThunk(
  "search/getIt",
  async (searchTerm, thunkAPI) => {
    const next = thunkAPI.getState().gifSearch.next;
    const response =
      next === null
        ? await API.get(
            `${EVENT.SEARCH}${searchTerm}&${API_KEY}${MEDIA_FILE_TYPE.GIF}`,
          )
        : await API.get(
            `${EVENT.SEARCH}${searchTerm}&${API_KEY}${LIMIT}10${MEDIA_FILE_TYPE.GIF}${NEXT}${next}`,
          );

    const data = await response.data;
    return { gif: data.results, next: data.next };
  },
);

export const gifSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      return { ...state, searchTerm: payload, gif: [], next: null };
    },
    inputChange: (state, { payload }) => {
      return { ...state, searchTerm: payload };
    },
    addGif: (state, { payload }) => {
      return { ...state, payload };
    },
  },
  extraReducers: {
    [getIt.pending]: (state) => {
      state.status = "loading";
    },
    [getIt.fulfilled]: (state, { payload }) => {
      const gif = [...state.gif, ...payload.gif];
      const next = payload.next;
      const status = "success";
      return { ...state, next, gif, status };
    },
    [getIt.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { inputChange, updateList, setSearchTerm } =
  gifSearchSlice.actions;
export default gifSearchSlice.reducer;
