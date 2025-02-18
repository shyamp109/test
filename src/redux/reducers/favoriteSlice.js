import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        event => event.event_date_id === action.payload.event_date_id,
      );
      if (existingIndex === -1) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        event => event.event_date_id !== action.payload.event_date_id,
      );
    },
  },
});

export const {addToFavorites, removeFromFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;
