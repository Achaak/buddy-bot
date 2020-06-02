import GpioModule from 'onoff'

class l298n {
  constructor() {
    const Gpio = GpioModule.Gpio

    const pin20 = new Gpio(20, "out");
    const pin16 = new Gpio(16, "out");
    
    const pin21 = new Gpio(21, "out");
    
    pin20.write(Gpio.HIGH);
    pin16pin20.write(Gpio.LOW);
  
    pin21pin20.write(60);
  }
}

export default l298n