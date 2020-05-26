import React from 'react';
import ReactNipple from 'react-nipple';

const DistanceSensor = ({socket}) => {
  let flag = false

  const handleMove = (evt, data) => {
    if(!flag) {
      flag = true

      const values = {
        angle: data.angle.degree,
        force: 100/50*data.distance
      }

      console.log(values, data.distance)
      
      socket.emit('DIRECTION:SET', values);

      setTimeout(() => { flag = false}, 100)
    }
  }

  const handleEnd = () => {
    const values = {
      angle: 0,
      force: 0
    }
      
    socket.emit('DIRECTION:SET', values);
  }

  return (
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
      onEnd={handleEnd}
    />
  )
}

export default DistanceSensor