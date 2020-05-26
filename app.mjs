import http from "http"
import core from "./core/index.js"
import socketIo from 'socket.io'

let server = http.createServer()

// Start socket io
const io = socketIo(server);

// Start core
const Core = new core(io)

server.listen(8080)