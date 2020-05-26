import fs from "fs"
import util from 'util'

const readFileFs = util.promisify(fs.readFile);
const writeFileFs = util.promisify(fs.writeFile);

const readFile = (path) => {
  return readFileFs(path)
}

const writeFile = (path, content) => {
  return writeFileFs(path, content)
}

export default {
  readFile,
  writeFile
}