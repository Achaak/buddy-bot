import fs from "fs"
import fileSystem from "./../fileSystem/index.js"

const filePath = "./data/mappings.json"

const initialMap = []

class Mapping {
  constructor() {
    this.init()

    this.map = null
  }
  
  async init() {
    try {
      if (fs.existsSync(filePath)) {
        // File exist
        const fileContent = JSON.parse(await fileSystem.readFile(filePath))
  
        this.map = fileContent
      }
      else {
        // File not exist
        await fileSystem.writeFile(filePath, JSON.stringify(initialMap))
    
        this.map = initialMap
      }
    } catch(err) {
      console.error(err)
    }
  }
  
  async saveMap() {
    await fileSystem.writeFile(filePath, JSON.stringify(this.map))
  }
}

export default Mapping