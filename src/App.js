import React,{useEffect} from 'react';
import './App.css';
import Headers from './components/headers/headers';
import HomePage from './components/homepage';
import QuickView from './components/quickview';
import Products from './components/products';
import Footer from './components/footer';
import Linhtinh from './components/linhtinh';
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Carts from './components/carts/index';
function App() {

  return (
    <Router>
    <div style={{backgroundColor: '#f7f7f7'
    }}>
        <Headers></Headers>
        {/* <HomePage></HomePage> */}
        <Switch>
          <Route exact path="/" component={()=>(
            <div>
              <HomePage></HomePage>
              <QuickView></QuickView>
              <Products></Products>
              <Products></Products>
              <Linhtinh></Linhtinh>
            </div>
          )}>
           
          </Route>
          <Route path="/test" component={Products}>
           
          </Route>
          <Route path="/cart" component={Carts}>
           
           </Route>
        </Switch>
        {/* <Carts></Carts> */}
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
