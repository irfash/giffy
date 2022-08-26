import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/axios";
import { EVENT, API_KEY, MEDIA_FILE_TYPE, LIMIT } from "../../constants";

const initialState = {
  trending: [],
  status: null,
};
const getTermUrl = async (term) => {
  const response = await API.get(
    `${EVENT.SEARCH}${term}&${API_KEY}${LIMIT}1${MEDIA_FILE_TYPE.GIF}`
  );
  const data = await response.data;
  const url = await data.results[0].itemurl;
  return { term, url: `${url}.gif` };
};
export const getGifTrend = createAsyncThunk(
  "gifTrend/getGifTrend",
  async () => {
    const response = await API.get(`${EVENT.TRENDING}${API_KEY}`);
    const data = await response.data;
    const terms = await data.results;
    const trending = Promise.all(
      terms.map(async (term) => {
        const trending_item = getTermUrl(term);
        return trending_item;
      })
    );
    return trending;
  }
);

export const gifTrendSlice = createSlice({
  name: "gifTrend",
  initialState,
  reducers: {},
  extraReducers: {
    [getGifTrend.pending]: (state) => {
      state.status = "loading...";
    },
    [getGifTrend.fulfilled]: (state, { payload }) => {
      state.trending = payload;
      state.status = "success";
    },
    [getGifTrend.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default gifTrendSlice.reducer;
