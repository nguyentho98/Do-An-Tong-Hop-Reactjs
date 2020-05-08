import React,{useEffect,useState} from 'react';
import Headers from '../components/headers/';
import Home from '../components/homepage';
import QuickView from '../components/quickview';
import Products from '../components/products';
import Footer from '../components/footer';
import Linhtinh from '../components/linhtinh';
import Alerts from '../components/alerts';
const HomePage = ({match} )=> {
  const [stateLogin, setStateLogin] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        var user = JSON.parse(localStorage.getItem('USER'))
        setStateLogin(user ? true : false);
    },[stateLogin])
  return (
        <div>
            <Headers stateLogin={stateLogin}></Headers>
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
