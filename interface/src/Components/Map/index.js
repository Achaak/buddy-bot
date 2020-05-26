import React, { useEffect, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const initialPositions = {
  x: 0,
  y: 0,
  angle: 0
}

const Map = ({ socket }) => {
  const [positions, setPositions] = useState(initialPositions)

  useEffect(() => {
    initEvent()

    // eslint-disable-next-line
  }, [])

  const initEvent = () => {
    socket.on('POSITIONS:INFOS', (_positions) => {
      setPositions(_positions);
      console.log(_positions)
    });
  }

  return (
    <Stage width={400} height={200}>
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
  )
}

export default Map