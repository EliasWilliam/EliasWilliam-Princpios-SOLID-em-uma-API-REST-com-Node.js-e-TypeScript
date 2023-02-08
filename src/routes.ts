import { Router, response } from "express";
import { createUserController } from "./useCases/CreateUser";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";

const router = Router()

router.post('/users', (request, response) => {
   // return response.status(201).send();

   return CreateUserController.handle(request, response);
});

export { router }