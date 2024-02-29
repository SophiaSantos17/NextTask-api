// importa o módulo 'bcrypt' para lidar com a criptografia de senhas
import bcrypt from "bcrypt";
// importa o repositório de autenticação
import authRepository from "../repositories/authRepository.js";

// função assíncrona para registrar um novo usuário
async function signup(body) {
    // hash da senha fornecida pelo usuário
    const hasPassword = bcrypt.hashSync(body.password, 10);
  
    // verifica se o usuário já existe no banco de dados
    const userExists = await authRepository.findByEmail(body.email);
    if (userExists) throw new Error("User already exists!");
    
    // retorna os dados do usuário após a criação
    return await authRepository.create({ ...body, password: hasPassword });
}

// função assíncrona para fazer login
async function signin(body){
    // verifica se o usuário com o email fornecido existe no banco de dados
    const userExists = await authRepository.findByEmail(body.email);
    if(!userExists) throw new Error("Email ou Senha incorreto");

    // verifica se a senha fornecida corresponde à senha armazenada no banco de dados
    const passwordOk = bcrypt.compareSync(body.password, userExists.password);
    if(!passwordOk) throw new Error("Email ou Senha incorreto");

    // retorna o token de autenticação para o usuário logado
    return authRepository.generateToken(userExists._id);
}

// função assíncrona para obter detalhes do usuário logado
async function userLogged(id){
    // busca o usuário no banco de dados pelo ID
    const user = await authRepository.findById(id);
    if(!user) throw new Error ("Usuário não encontrado");
    return user;
}

// exporta as funções para que possam ser utilizadas em outros arquivos
export default {signup, signin, userLogged};
