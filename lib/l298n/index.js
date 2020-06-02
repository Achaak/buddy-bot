import GpioModule from 'pigpio'

class l298n {
  constructor() {
    const Gpio = GpioModule.Gpio

    const pin20 = new Gpio(20, {mode: Gpio.OUTPUT});
    const pin16 = new Gpio(16, {mode: Gpio.OUTPUT});
    
    const pin21 = new Gpio(21, {mode: Gpio.OUTPUT});
    
    /*pin20.write(Gpio.HIGH);
    pin16.write(Gpio.LOW);
  
    pin21.write(60);*/
  }
}

export default l298n