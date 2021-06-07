import React from 'react';
import './song.scss';

const SongCom = ({ Song, setOpenLibary, openLibary }) => {
    function libaryOpen() {
        setOpenLibary(!openLibary);
    }
    return (
        <div>
            <div className="wawes">
                <h2>Wawes</h2>
                <button onClick={libaryOpen}>Libary</button>
            </div>
            <div className="songContainer">
                <img src={Song.cover}></img>
                <h2>{Song.name}</h2>
                <h3>{Song.artist}</h3>
            </div>
        </div>
    )
}

export default SongCom
