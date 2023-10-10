import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/heroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.myArray);

  const addCartItem = () => {
    dispatch(addToCart("Shirt"));
  };

  const deleteCartItem = () => {
    dispatch(deleteFromCart("shirt"));
  };

  console.log(cartItem);
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
    </Layout>
  );
}
