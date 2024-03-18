import React from 'react';
import Navbar from '../NavBar/Navbar';
import ProductList from '../ProductList/ProductList';


export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  )
}
