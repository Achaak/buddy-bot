import React, { useEffect, useState } from 'react';
const initialDistances = {
  left: 0,
  middle: 0,
  right: 0,
}

const DistanceSensor = ({socket}) => {
  const [distances, setDistances] = useState(initialDistances)

  useEffect(() => {
    initEvent()

    // eslint-disable-next-line
  }, [])

  const initEvent = () => {
    socket.on('DISTANCE_SENSOR:INFOS', (_distance) => {
      setDistances(_distance);
      console.log(_distance)
    });
  }

  const distanceFormat = (_distance) => {
    if(_distance < 100) {
      return `${parseFloat(_distance).toFixed(1)} cm`
    }
    else {
      return `${parseFloat(_distance/100).toFixed(1)} m`
    }
  }

  return (
    <div className="distance-sensor-block">
      <div className="left">
        <label>{distanceFormat(distances.left)}</label>
      </div>

      <div className="middle">
        <label>{distanceFormat(distances.middle)}</label>
      </div>

      <div className="right">
        <label>{distanceFormat(distances.right)}</label>
      </div>
    </div>
  )
}

export default DistanceSensor