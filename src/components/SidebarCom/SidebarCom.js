import React from 'react';
import SidebarSongCom from '../SidebarSongCom/SidebarSongCom.js';
import './sidebarCom.scss';

const SidebarCom = ({ songArray, setCurrentSong, setIsplaying, openLibary}) => {
    return (
        <div className={`container ${openLibary === true ? "" : "toggle"}`}>
            <h1>Libary</h1>
            {songArray.map(el=>{
                return(
                    <SidebarSongCom setIsplaying={setIsplaying} setCurrentSong={setCurrentSong} el={el}/>
                )
            })}

        </div> 
    )
}

export default SidebarCom;
