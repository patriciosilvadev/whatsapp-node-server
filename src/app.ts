import express from "express";
import WebSocket from "ws";
import {connectionHandler} from "./ws/websocket";
import messageRouter from "./routes/messages";
import usersRouter from "./routes/users";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json());
app.use(messageRouter);
app.use(usersRouter);

const server = app.listen(3000);
const wss = new WebSocket.Server({server});

wss.on("connection", connectionHandler);
