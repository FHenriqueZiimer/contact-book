import { configureStore } from '@reduxjs/toolkit';
import { ListContactSlice } from './Reducers/listContact';
import { FilterSlice } from './Reducers/filter';

const store = configureStore({
  reducer: {
    datas: ListContactSlice.reducer,
    filter: FilterSlice.reducer
  }
});

export default store;
