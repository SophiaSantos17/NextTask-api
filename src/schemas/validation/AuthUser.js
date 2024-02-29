// importa a biblioteca Joi para validação de dados
import Joi from "joi";

// define o esquema de validação para a autenticação de usuário
export const AuthUser = Joi.object({
    // define a validação para o campo 'email': string, formato de email válido, obrigatório e com no mínimo 3 caracteres
    email: Joi.string().email().required().min(3),
    // define a validação para o campo 'password': string, obrigatório e com no mínimo 3 caracteres
    password: Joi.string().required().min(3),
})
