import express from "express";
import bodyParser from "body-parser";
import { sendMessage, getMessages, getMessageById } from "../controllers/messageController.js";

const messageRoute = express.Router();

messageRoute.post('/messages/send', sendMessage);
messageRoute.get('/messages/getAll', getMessages);
messageRoute.get('/messages/getById/:id', getMessageById);

export default messageRoute;