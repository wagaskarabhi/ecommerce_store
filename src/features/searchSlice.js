// src/redux/searchSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = searchSlice.actions;

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
