import bodyParser from "body-parser"
import express from "express"
import socket from "socket.io"
import cors from "cors"
import { checkAuth, updateLastSeen } from "../middlewares"
import { loginValidation, registerValidation } from "../utils/validations"

import multer from "./multer"

import {
  UserCtrl,
  DialogCtrl,
  MessageCtrl,
  UploadFileCtrl,
} from "../controllers"

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io)
  const DialogController = new DialogCtrl(io)
  const MessageController = new MessageCtrl(io)
  const UploadFileController = new UploadFileCtrl()

  app.get("/", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    ) // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    ) // If needed
    res.setHeader("Access-Control-Allow-Credentials", true) // If needed

    res.send("cors problem fixed:)")
  })

  app.use(cors({ origin: "http://followhappyq.github.io/" }))
  app.use(bodyParser.json())
  app.use(checkAuth)
  app.use(updateLastSeen)

  app.get("/user/me", UserController.getMe)
  app.get("/user/verify", UserController.verify)
  app.post("/user/signup", registerValidation, UserController.create)
  app.post("/user/signin", loginValidation, UserController.login)
  app.get("/user/find", UserController.findUsers)
  app.get("/user/:id", UserController.show)
  app.delete("/user/:id", UserController.delete)

  app.get("/dialogs", DialogController.index)
  app.delete("/dialogs/:id", DialogController.delete)
  app.post("/dialogs", DialogController.create)

  app.get("/messages", MessageController.index)
  app.post("/messages", MessageController.create)
  app.delete("/messages/", MessageController.delete)

  app.post("/files", multer.single("file"), UploadFileController.create)
  app.delete("/files", UploadFileController.delete)
}

export default createRoutes
