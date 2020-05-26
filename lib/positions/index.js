import fs from "fs"
import fileSystem from "./../fileSystem/index.js"

const filePath = "./data/positions.json"

const initialPositions = {
  x: 0,
  y: 0,
  angle: 0
}

class Positions {
  constructor({io}) {
    this.io = io

    this.init()

    this.startLoop()

    this.positions = null
  }
  
  async init() {
    this.initPositions()
    this.initSocket()
  }

  async initPositions() {
    try {
      if (fs.existsSync(filePath)) {
        // File exist
        const fileContent = JSON.parse(await fileSystem.readFile(filePath))
  
        this.positions = fileContent
      }
      else {
        // File not exist
        await fileSystem.writeFile(filePath, JSON.stringify(initialPositions))
    
        this.positions = initialPositions
      }
    } catch(err) {
      console.error(err)
    }
  }

  async initSocket() {
    this.io.sockets.on('connection', function (socket) {
      socket.on('DIRECTION:SET', this.setDirectionJoystick.bind(this))
    }.bind(this));
  }



  // Update function of the loop
  update(progress) {
    // Defined function
    var timestamp = new Date().getTime();
    
    this.sendPositions()
  }

  // Loop function
  loop(timestamp = new Date().getTime()) {
    var progress = (timestamp - this.lastRender);

    this.update(progress);
    
    this.lastRender = timestamp;
    
    setTimeout(() => {
      if (this.loopFlag) this.loop();
    }, 100)
  }

  // Start the loop
  startLoop() { this.loopFlag = true; this.loop(); }

  // Stop the loop
  stopLoop() {  this.loopFlag = false }



  sendPositions() {
    this.io.emit('POSITIONS:INFOS', this.positions);
  }

  setDirectionJoystick(direction) {
    this.setAngleJoystick(direction.angle, direction.force)
  }

  setAngleJoystick(angle, force) {
    const degree = angle.degree

    let rotation = 0

    if(degree > 0 && degree < 180) {
      rotation = (degree - 90) * -1

    } else {
      // 180 - 360
      rotation = degree - 270
    }
    
    // Set the rotation
    this.setAngle(rotation)
  }

  setAngle(rotation) {

    this.positions.angle += 10
    this.positions.x += 1
    this.positions.y += 1
  }
  
  async savePositions() {
    await fileSystem.writeFile(filePath, JSON.stringify(this.positions))
  }
}

export default Positions