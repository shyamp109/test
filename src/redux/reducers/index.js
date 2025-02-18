import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import favoriteSlice from './favoriteSlice';

export const reducers = combineReducers({
  auth: authSlice,
  favorites: favoriteSlice,
});
