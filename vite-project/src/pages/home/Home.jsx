import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/heroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";

export default function Home() {
  
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
    </Layout>
  );
}
