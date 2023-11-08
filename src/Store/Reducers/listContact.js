import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) || []
};

export const ListContactSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    create: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      localStorage.setItem('contacts', JSON.stringify(state.items));
    }
    ,
    remove: (state, action) => {
      const data = action.payload;
      state.items = state.items.filter((e) => e.id !== data);
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    update: (state, action) => {
      const itemUpdate = action.payload;
      const index = state.items.findIndex((e) => e.id === itemUpdate.id);
      if (index !== -1) {
        state.items[index] = itemUpdate;
        localStorage.setItem('contacts', JSON.stringify(state.items));
      }
    }
  }
});

export const { create, remove, update } = ListContactSlice.actions;
export default ListContactSlice.reducer;
