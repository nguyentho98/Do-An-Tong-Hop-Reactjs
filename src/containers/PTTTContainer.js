import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
import PhuongThucThanhToan from '../components/phuongthucthanhtoan';

const PTTTContainer= () =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <PhuongThucThanhToan></PhuongThucThanhToan>
        <Footer></Footer>
      </div>
  );
}

export default PTTTContainer;
