import express, { Router } from 'express';
import { Home } from '../controller/HomeController.js';
import { login } from '../controller/LoginController.js';
import { signup } from '../controller/SignupController.js';
const Route = express.Router();


Route.get('/',Home)

Route.post('/login',login);

Route.post('/signup',signup);

export default Route;