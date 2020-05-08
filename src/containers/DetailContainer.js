import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Detail from '../components/detail/index';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
const DetailContainer= ({match}) =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <Detail match={match}></Detail>
        <Footer></Footer>
      </div>
  );
}

export default DetailContainer;
