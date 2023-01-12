import express from "express";
import bodyParser from "body-parser";
import { gettingTest } from "../controllers/messageController.js";

const messageRoute = express.Router();

messageRoute.get('/messages/get', gettingTest);

export default messageRoute;