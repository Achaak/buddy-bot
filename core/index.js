import Positions from './../lib/positions/index.js'
import Mapping from './../lib/mapping/index.js';
import Detectors from './../lib/detectors/index.js';

class Core {
  constructor(io) {
    this.io = io

    // Initialize
    this.detectors = new Detectors({io: io})
    this.positions = new Positions({io: io, detectors: this.detectors})
    this.map = new Mapping({io: io, detectors: this.detectors})

    this.startLoop()

    io.on("connection", (socket) => {
      console.log("New client connected");
    });
  }

  // Update function of the loop
  update(progress) {
    // Defined function
    var timestamp = new Date().getTime();
    
    //console.log(progress)

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

export default Core