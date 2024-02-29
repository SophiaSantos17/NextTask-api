// importando o Router do express para lidar com as rotas
import { Router } from "express";

// importando o authController
import authController from "../controllers/authController.js";

// importa o Middleware de autenticação
import { authMiddleware } from "../middlewares/authMiddleware.js";

// importa o Middleware de validação do usuário
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";

// importa os esquemas de validação para criação e autenticação de usuários
import { CreateUser } from "../schemas/validation/CreateUser.js";
import { AuthUser } from "../schemas/validation/AuthUser.js";

// criando uma instância do Router para gerenciar as rotas de autenticação
const authRouter = Router();

// definindo a rota para a criação de um novo usuário (signup)
authRouter.post(
    "/signup",
    // aplica o esquema de validação de criação de novos usuários
    validationSchemaMiddleware(CreateUser),
    // chama o método "signup" do authController
    authController.signup
);

// definindo a rota para logar o usuário
authRouter.post(
    "/signin",
    // aplica o esquema de validação de autenticação de usuários
    validationSchemaMiddleware(AuthUser),
    // chama o método "signin" do authController
    authController.signin
);

// rota para achar o usuario
authRouter.get(
    "/me",
    // aplica o middleware de autenticação para verificar se o usuário está autenticado
    authMiddleware,
    // chama o método "userLogged" do authController
    authController.userLogged
);

// exportando o router para ser importado em outros arquivos
export default authRouter;