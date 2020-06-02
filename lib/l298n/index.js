import gpiop from 'rpi-gpio'

class l298n {
  constructor() {
    gpiop.write(20, true)
    gpiop.write(16, false)
    gpiop.write(21, 200)
  }
}

export default l298n