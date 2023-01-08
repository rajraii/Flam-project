import React from 'react'
import '../app.css'
import Draggable from 'react-draggable';
import avatar from '../assets/img/avatar.glb'

const DragComponent = () => {
  return (
    <div className="container">
      <Draggable bounds='parent'>
        <div className="box">
          <img src={avatar} alt="" />
        </div>
      </Draggable>
    </div>

  )
}

export default DragComponent