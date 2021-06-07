import React, { useState, useRef } from 'react';
import './player.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
// import Styled from 'styled-components'



const PlayerCom = ({ currentSong, isPlaying, setIsplaying, setCurrentSong, songArray }) => {
    const [time, setTime] = useState({
        current: 0,
        duration: 0
    })
    let audio = useRef('')
    let input = useRef('')

    function handleClick() {

        setIsplaying(!isPlaying)
        if (isPlaying) {
            audio.current.pause()
        } else {
            audio.current.play()
        }
    }


    function halerTimeUpdate() {
        let current = audio.current.currentTime
        let duration = audio.current.duration
        setTime({ ...time, current: current, duration: duration })
    }


    function secondsToTime(e) {
        var h = Math.floor(e / 3600).toString().padStart(2, '0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
            s = Math.floor(e % 60).toString().padStart(2, '0');

        return m + ':' + s;
    }

    function handlerChange(e) {
        audio.current.currentTime = e.target.value
    }

    function skipSong(open) {
        let indexSong = songArray.findIndex(i => i.id === currentSong.id);
        if (open === "prew") {
            setCurrentSong(songArray[indexSong - 1]);
            if(indexSong === 0){
                setCurrentSong(songArray[songArray.length])
            }
        } else {
            setCurrentSong(songArray[indexSong + 1]);
        }
    }


    return (
        <div className="player">
            <div className="time-control">
                <p>{secondsToTime(time.current)}</p>
                <input onChange={handlerChange} ref={input} min={time.current.currentTime} max={time.current.duration} value={time.current} type="range"></input>
                <p>{secondsToTime(time.duration)}</p>
            </div>
            <div className="controller">
                <FontAwesomeIcon onClick={() => skipSong("prew")} size="2x" icon={faBackward} />
                <FontAwesomeIcon onClick={handleClick} size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipSong("next")} size="2x" icon={faForward} />
            </div>
            <audio onLoadedData={halerTimeUpdate} onTimeUpdate={halerTimeUpdate} ref={audio} src={currentSong.audio}></audio>
        </div>
    )
}

// const Player = styled.div
export default PlayerCom;
