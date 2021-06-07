import React from 'react';
import './SidebarSongCom.scss';

const SidebarSongCom = ({ el, setCurrentSong, setIsplaying }) => {
    function Change() {
        setCurrentSong(el);
        setIsplaying(el);
    }
    return (
        <div>
            <div onClick={Change} className="bar">
                <div className="image">
                    <img className="img" src={el.cover} />
                </div>
                <div>
                    <h3>{el.name}</h3>
                    <p>{el.artist}</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarSongCom;
