import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imageUrl: null,
    title: null,
    rating: null,
    genre: null,
    shortDescription: null,
    dishes: null,
  },
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
