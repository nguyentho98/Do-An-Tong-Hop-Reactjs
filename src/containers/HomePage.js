import React,{useEffect,useState} from 'react';
import Headers from '../components/headers/';
import Home from '../components/homepage';
import QuickView from '../components/quickview';
import Products from '../components/products';
import Footer from '../components/footer';
import Linhtinh from '../components/linhtinh';
import Alerts from '../components/alerts';
const HomePage = ({match} )=> {
 
  return (
        <div>
            <Headers></Headers>
            <Alerts></Alerts>
            <Home></Home>
            <QuickView></QuickView>
            <Products match={match}></Products>
            <Linhtinh></Linhtinh>
            <Footer></Footer>
        </div>  
  );
}
export default HomePage;
