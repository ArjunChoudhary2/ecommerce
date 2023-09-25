import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state,action){
        state.push(action.payload);
    },
    deleteFromCart(state,action){
        return state.filter(item => item.id != action.payload.id);
    }
  },
});

//DESTRUCTURE THE REDUCER ACTIONS
export const {addToCart,deleteFromCart} = cartSlice.actions;
//EXPORT COMBINED REDUCER
export default cartSlice.reducer;
