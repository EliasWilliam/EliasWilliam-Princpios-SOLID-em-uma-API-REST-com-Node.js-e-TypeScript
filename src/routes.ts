import { Router, response } from "express";
import { createUserController } from "./useCases/CreateUser";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { authenticateController } from "./useCases/Authenticate";

const router = Router()
let test: CreateUserController

router.post('/users', (request, response) => {
   // return response.status(201).send();

   return test.handle(request, response);
});

router.post('/login', (request, response) => {
   // return response.status(201).send();

   return authenticateController.handle(request, response);
});

export { router }