import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myArray: JSON.parse(localStorage.getItem("cart")) ?? [],
};
console.log(initialState);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state);
      state.myArray = [...state.myArray, action.payload];
      console.log(state.myArray);
    },
    deleteFromCart(state, action) {
      let removed = false; // Flag to track if an element has been removed

      const updatedArray = state.myArray.filter((item) => {
        if (!removed && item.id === action.payload.id) {
          removed = true; // Set the flag to true after removing the first matching element
          return false; // Exclude the first element that matches the condition
        }
        return true; // Keep all other elements in the array
      });

      console.log(state.myArray);
      console.log(updatedArray);

      return {
        ...state.myArray,
        myArray: updatedArray,
      };
    },
  },
});

//DESTRUCTURE THE REDUCER ACTIONS
export const { addToCart, deleteFromCart } = cartSlice.actions;
//EXPORT COMBINED REDUCER
export default cartSlice.reducer;
