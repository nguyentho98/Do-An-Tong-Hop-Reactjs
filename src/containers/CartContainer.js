import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Carts from '../components/carts/index';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';

const CartContainer= () =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <Carts></Carts>
        <Footer></Footer>
      </div>
  );
}

export default CartContainer;
