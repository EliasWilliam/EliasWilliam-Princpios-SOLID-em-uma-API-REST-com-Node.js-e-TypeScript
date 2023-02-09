import { MysSqlUsersRepository } from "../../repositories/implementations/MySqlUsersRepository";
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";



const mysqlUsersRepository = new MysSqlUsersRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(mysqlUsersRepository)

const authenticateController = new AuthenticateController(
    authenticateUserUseCase
)


export { authenticateController, authenticateUserUseCase}
