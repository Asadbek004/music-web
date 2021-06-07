import React, { useState } from 'react';
import SongCom from './components/SongCom/SongCom.js';
import PlayerCom from './components/PlayerCom/PlayerCom.js';
import SidebarCom from './components/SidebarCom/SidebarCom.js';
import './components/styles/App.scss';
import Data from './data.js';
import Styled from 'styled-components'


function App() {
  const [songArray, setSongArray] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songArray[0]);
  const [isPlaying, setIsplaying] = useState(false);
  const [openLibary, setOpenLibary] = useState(false);

  return (
    <div className="App">
      <SongCom openLibary={openLibary} setOpenLibary= {setOpenLibary} Song={currentSong} />
      <PlayerCom currentSong={currentSong} isPlaying={isPlaying} setIsplaying={setIsplaying} setCurrentSong={setCurrentSong} songArray={songArray} />
      <SidebarCom openLibary={openLibary} setIsplaying={setIsplaying} setCurrentSong={setCurrentSong} songArray={songArray} />
    </div>
  );
}

export default App;
