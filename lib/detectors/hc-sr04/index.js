import GpioModule from 'pigpio'

const Gpio = GpioModule.Gpio

const MICROSECDONDS_PER_CM = 1e6/34321

class HC_SR04 {
  constructor({trigPin, echoPin}) {
    this.trigPin = trigPin
    this.echoPin = echoPin

    this.distance = 0

    // Initialize
    this.init()
  }

  init() {
    this.trig = new Gpio(this.trigPin, {mode: Gpio.OUTPUT});
    this.echo = new Gpio(this.echoPin, {mode: Gpio.INPUT, alert: true});
    
    this.trig.digitalWrite(0)

    let startTick;

    this.echo.on('alert', (level, tick) => {
      if (level == 1) {
        startTick = tick;
      } else {
        const endTick = tick;
        const diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
        
        this.distance = diff / 2 / MICROSECDONDS_PER_CM;
      }
    });

    setInterval(() => {
      this.trig.trigger(10, 1);
    }, 1000);
  }

  getDistance() {
    return this.distance
  }
}

export default HC_SR04