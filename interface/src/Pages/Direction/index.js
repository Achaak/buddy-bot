import React from 'react';
import ReactNipple from 'react-nipple';

import 'react-nipple/lib/styles.css';

import { Map } from './../../Components'

const Direction = ({ socket }) => {
  let flag = false

  const handleMove = (evt, data) => {
    if(!flag) {
      flag = true

      const values = {
        angle: {
          degree: data.angle.degree
        },
        force: data.force,
        distance: data.distance
      }

      console.log(data.angle.degree)
      
      socket.emit('DIRECTION:SET', values);

      setTimeout(() => { flag = false}, 100)
    }
  }

  return (
    <div className="login-screen">
      <Map socket={socket}/>

      <ReactNipple
        options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
        style={{
            outline: '1px dashed red',
            backgroundColor: 'blue',
            position: 'relative',
            width: 150,
            height: 150
        }}
        onMove={handleMove}
      />
    </div>
  )
}

export default Direction