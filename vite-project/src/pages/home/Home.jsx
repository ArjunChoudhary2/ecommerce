import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

export default function Home() {
  const context = useContext(myContext);
  const { name, id } = context;
  return (
    <Layout>
      <h1>{name}</h1>
      <h1>{id}</h1>
    </Layout>
  );
}
