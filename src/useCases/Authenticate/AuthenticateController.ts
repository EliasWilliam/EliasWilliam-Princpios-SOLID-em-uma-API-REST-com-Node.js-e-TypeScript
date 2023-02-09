import { Request, Response } from'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}
    
 public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
     const user =  await this.authenticateUserUseCase.execute({
        email,
        password
      })
  
      return response.status(201).send(user);  
    } catch (err) {
      console.log(err)
      return response.status(400).json({
        message: err || 'Unexpected error.'
      }) 
    }
  }
}
//type createUserController = typeof CreateUserController;

