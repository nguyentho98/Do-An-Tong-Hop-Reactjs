import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
import InfoUser from '../components/infouser/index';

const InfoUserContainer= ({match}) =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <InfoUser match={match}></InfoUser>
        <Footer></Footer>
      </div>
  );
}

export default InfoUserContainer;
