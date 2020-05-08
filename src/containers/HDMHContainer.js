import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
import HuongDanMuaHang from '../components/huongdanmuahang';

const HDMHContainer= () =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <HuongDanMuaHang></HuongDanMuaHang>
        <Footer></Footer>
      </div>
  );
}

export default HDMHContainer;
