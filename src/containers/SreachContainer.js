import React from 'react';
import Headers from '../components/headers';
import Footer from '../components/footer';
import Alerts from '../components/alerts';
import BtnMenu from '../components/btnmenu';
import Sreach from '../components/sreach';

const SreachContainer= ({match}) =>{
  return (
      <div>
        <Headers></Headers>
        <Alerts></Alerts>
        <BtnMenu></BtnMenu>
        <Sreach match={match}></Sreach>
        <Footer></Footer>
      </div>
  );
}

export default SreachContainer;
