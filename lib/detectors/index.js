class Detectors {
  constructor({io}) {
    this.io = io

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
}

export default Detectors