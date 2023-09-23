import React, {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'


export default function Order() {

  const context = useContext(myContext);

  return (
    <Layout>Order</Layout>
  )
}
