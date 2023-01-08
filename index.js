import express from "express";
import bodyParser from "body-parser";
import userManager from "./routes/userManager.js";
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
app.use('/apiv1', userManager);

app.listen(port, function() {
    console.log("Server is starting! Port number is:" + port);
});