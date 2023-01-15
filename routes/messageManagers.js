import express from "express";
import bodyParser from "body-parser";
import { sendMessage } from "../controllers/messageController.js";

const messageRoute = express.Router();

messageRoute.post('/messages/send', sendMessage);

export default messageRoute;