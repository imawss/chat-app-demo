import express from "express";
import bodyParser from "body-parser";
import{signUp, signIn, getAllUsers, getUserAuth} from "../controllers/userController.js"

const userRoute = express.Router();

userRoute.get('/users', getAllUsers);
userRoute.get('/users/getAuth',getUserAuth);
//userRoute.get('/users/:id', getUserById);

userRoute.post('/users/signup', signUp);
userRoute.post('/users/login', signIn);
//userRoute.delete('/users/delete/:id', deleteUser);
export default userRoute;