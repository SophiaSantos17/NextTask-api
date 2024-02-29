// importando o serviço de autenticação
import authService from "../services/authService.js";

// função para criar um novo usúario
async function signup(req, res){
    // obtendo os dados do corpo da requisição
    const body = req.body;
    
    try{
        // chamando a função signup do authService
        const resService = await authService.signup(body);
          // respondendo a requisição
        return res.status(201).send(resService);

    } catch (err) {
        return res.status(409).send(err.message);
    }
}

// função para o usuário se cadastrar
async function signin(req, res){
    // obtendo os dados do corpo da requisição
    const body = req.body;
    try{
        // chamando o serviço de autenticação para realizar o login e obter um token
        const token = await authService.signin(body);
        // retorna o token  
        return res.send(token)

    } catch (err) {
        return res.status(401).send(err.message);
    }
}

// função para obter informações do user logado
async function userLogged(req, res){
    // pega o ID do usuário
    const {_id: id} = res.locals.user;

    try{
        // pega informações do usuário com base no ID
        const user = await authService.userLogged(id);
        // retorna as informações do usuário
        return res.send(user);

    } catch (err) {
        return res.status(404).send(err.message);
    }
}

// exportando as funções para utilizar em outros arquivos
export default {signup, signin, userLogged};

