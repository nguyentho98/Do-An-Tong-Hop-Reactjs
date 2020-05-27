import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
import Search from '../components/search';

const SearchContainer= ({match}) =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <Search match={match}></Search>
        <Footer></Footer>
      </div>
  );
}

export default SearchContainer;
