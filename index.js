import express from "express";
import bodyParser from "body-parser";
import UserRoute from "./routes/userManager.js";
import messageRoute from "./routes/messageManagers.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials:true, 
    optionSuccessStatus:200
}));
app.use(bodyParser.json());
app.use('/apiv1', UserRoute);
app.use('/apiv1', messageRoute);

app.listen(port, function() {
    console.log("Server is starting! Port number is:" + port);
});