import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateRequestDTO } from "./IAuthenticateRequestDTO";


export class AuthenticateUserUseCase {
    constructor(
    private usersRepository: IUsersRepository,  
    ){}

    async execute(data: IAuthenticateRequestDTO) {

       const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

       if(!userAlreadyExists) {
         throw new Error('Email não está cadastrado. ');
       }

       if (data.password !== userAlreadyExists.password) {
        throw new Error('Senha inválida. ');
       }

       return userAlreadyExists

    }
}