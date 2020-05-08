import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
import ChinhSachBaoHanh from '../components/chinhsachbaohanh';

const CSBHContainer= () =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <ChinhSachBaoHanh></ChinhSachBaoHanh>
        <Footer></Footer>
      </div>
  );
}

export default CSBHContainer;
