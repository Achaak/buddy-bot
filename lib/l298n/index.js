import GpioModule from 'pigpio'

class l298n {
  constructor() {
    const Gpio = GpioModule.Gpio

    const pin20 = new Gpio(18, {mode: Gpio.OUTPUT});
    const pin16 = new Gpio(23, {mode: Gpio.OUTPUT});
    
    const pin21 = new Gpio(24, {mode: Gpio.OUTPUT});
    
    pin20.digitalWrite(0)
    pin16.digitalWrite(1)
    pin21.analogWrite(200)
    /*pin20.write(Gpio.HIGH);
    pin16.write(Gpio.LOW);
  
    pin21.write(60);*/
  }
}

export default l298n