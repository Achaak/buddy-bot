class Detectors {
  constructor({io, config}) {
    this.io = io
    this.config = config

    this.startLoop()

    this.distances = {
        left: 0,
        middle: 0,
        right: 0,
    }
  }

  getDistances() { return this.distances }


  // Update function of the loop
  update(progress) {
    // Defined function
    var timestamp = new Date().getTime();

    this.distances = {
      left: Math.random() * Math.floor(400),
      middle: Math.random() * Math.floor(400),
      right: Math.random() * Math.floor(400),
    }

    this.sendDistances()
  }

  // Loop function
  loop(timestamp = new Date().getTime()) {
    var progress = (timestamp - this.lastRender);

    this.update(progress);
    
    this.lastRender = timestamp;
    
    setTimeout(() => {
      if (this.loopFlag) this.loop();
    }, 300)
  }

  // Start the loop
  startLoop() { this.loopFlag = true; this.loop(); }

  // Stop the loop
  stopLoop() {  this.loopFlag = false }

  sendDistances() {
    this.io.emit('DISTANCE_SENSOR:INFOS', this.distances);
  }
}

export default Detectors