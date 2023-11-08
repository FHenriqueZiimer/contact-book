import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  term: ''
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      const { payload } = action;
      state.term = payload;
    }
  }
});

export const { searchTerm } = FilterSlice.actions;
export default FilterSlice.reducer;
