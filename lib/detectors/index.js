import GpioModule from 'pigpio'
import hc_sr04 from './hc-sr04/index.js'

const Gpio = GpioModule.Gpio

class Detectors {
  constructor({io, config}) {
    this.io = io
    this.config = config

    // Initialize sensor event
    this.gpioDistances = []

    this.distances = {
        left: 0,
        middle: 0,
        right: 0,
    }

    // Initialize
    this.init()
  }

  init() {
    // Initialize sensor event
    this.initTrigger()

    // Start the loop
    this.startLoop()
  }

  getDistances() { return this.distances }


  // Update function of the loop
  update(progress) {
    // Defined function
    var timestamp = new Date().getTime();

    this.triggerDistances()

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

  initTrigger() {
    const _object = this.config.distance_sensor
    for (const key in _object) {
      if (_object.hasOwnProperty(key)) {
        const element = _object[key];
        
        // Set the sensor
        this.gpioDistances[key] = new hc_sr04({
          trigPin: element.trig,
          echoPin: element.echo
        })
      }
    }
  }

  triggerDistances() {

    for (const key in this.gpioDistances) {
      if (this.gpioDistances.hasOwnProperty(key)) {
        const sensor = this.gpioDistances[key];
        
        sensor.getDistance()
      }
    }

    /*const trig = new Gpio(27, {mode: Gpio.OUTPUT});
    const echo = new Gpio(17, {mode: Gpio.INPUT, alert: true});
    
    trig.digitalWrite(0)

    echo.on('alert', (level, tick) => {
      console.log(tick, level)
    });*/
  }
}

export default Detectors