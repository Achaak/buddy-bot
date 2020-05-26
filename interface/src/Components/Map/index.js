import React, { useEffect, useState, useRef } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import useWindowSize from './../../Services/JS/useWindowSize'

import './Map.scss'

const initialPositions = {
  x: 0,
  y: 0,
  angle: 0
}

const Map = ({ socket }) => {
  const [positions, setPositions] = useState(initialPositions)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const mapCtnerRef = useRef(null)
  const windowSize = useWindowSize();

  useEffect(() => {
    initEvent()

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(windowSize)
    setCanvasWidth(mapCtnerRef.current.offsetWidth)
    setCanvasHeight(mapCtnerRef.current.offsetHeight)

    // eslint-disable-next-line
  }, [windowSize])

  const initEvent = () => {
    socket.on('POSITIONS:INFOS', (_positions) => {
      setPositions(_positions);
      //console.log(_positions)
    });
  }

  return (
    <div ref={mapCtnerRef} className="map-ctner">
      <Stage width={canvasWidth} height={canvasHeight} draggable className="map">
        <Layer>
          <Line
            x={positions.y}
            y={positions.y}
            points={[-20, 0, 20, -10, 20, 10]}
            closed
            rotation={positions.angle}
            stroke="black"
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Map