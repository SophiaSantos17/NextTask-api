// importa o Schema do usuário
import UserSchema from "../schemas/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

// criando o usuario
async function create(data){
    // cria um novo usuário de acordo com o Schema fornecido
    return await UserSchema.create(data);
}

// procurando o usuário pelo email e o retorna
async function findByEmail(email){
    const user = await UserSchema.findOne({ email })
    return user;

}

// função que gera um token JWT com base no ID do usuário
async function generateToken(id){
    // gera um token JWT contendo o ID do usuário, utilizando uma chave secreta e definindo um tempo de expiração
    return jwt.sign({id}, "secret123", {expiresIn: 86400})
}

// achando o usuario pelo seu ID
async function findById(id) {
    const user = await UserSchema.findById(id);
    return user;
}

// exportando as funções
export default {create, findByEmail, findById, generateToken};
