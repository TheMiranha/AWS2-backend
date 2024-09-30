import { Server } from "./application/Server";
import dotenv from "dotenv"
dotenv.config()

const server = new Server(25565)

server.run()
