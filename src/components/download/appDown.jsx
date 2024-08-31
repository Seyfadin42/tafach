import React from 'react';
import './appDown.css';
import { assets} from '../../assets/assets';

function Appdown() {
  return (
    <div className='app-download' id='app-download'>
      <p>Download For Better Experience <br /> ጣፋጭ APP</p>
      <div className="appd-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
}

export default Appdown;