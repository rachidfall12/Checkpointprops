import React from 'react'
import players from '../components/Description'
import Player from '../components/Player'
import './Player.css'

function PlayerList() {
  return (
    <div className='style'>
        { players.map(e => <Player info={e}></Player>)}
    </div>
  )
}

export default PlayerList