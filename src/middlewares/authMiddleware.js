// importa o dotenv
import 'dotenv/config'
// importa o repository de autenticação
import authRepository from "../repositories/authRepository.js"
// importa o JWT para validar o token
import jwt from "jsonwebtoken";

// Middleware de autenticação
export async function authMiddleware(req, res, next) {
    // obtem o token de autorização
    const { authorization } = req.headers;
    // se não houver token retorna uma mensagem de erro
    if (!authorization) return res.status(401).send({ message: "Invalid token" });

    // divide o token em duas partes: o esquema (Bearer) e o token em si
    const parts = authorization?.split(" ");
    // se o token não possuir exatamente duas partes, retorna uma mensagem de erro
    if (parts.length !== 2)
    return res.status(401).send({ message: "Invalid token" });

     // extrai o esquema e o token da array 'parts'
    const [schema, token] = parts;

    // verifica se o esquema do token é 'Bearer'. Se não for, retorna uma mensagem de erro
    if (!/^Bearer$/i.test(schema))
      return res.status(401).send({ message: "Invalid token" });


    // verifica a validade do token JWT
    jwt.verify(token, "secret123", async (err, decode) => {
        // se houver erro ao verificar o token, retorna uma resposta com status 401 e uma mensagem de erro
        if (err) return res.status(401).send({ message: "Invalid token" });

        // se não houver um payload decodificado no token, retorna uma resposta com status 401 e uma mensagem de erro
        if (!decode) return res.status(401).send({ message: "Invalid token" });

        // busca as informações do usuário no banco de dados usando o ID presente no payload do token
        const user = await authRepository.findById(decode.id);
        // se não encontrar um usuário com o ID do payload, retorna uma resposta com status 401 e uma mensagem de erro
        if (!user) return res.status(401).send({ message: "Invalid token" });

        // define um objeto 'user' nos dados locais da resposta para que outras funções/middlewares possam acessá-lo
        res.locals.user = user;

        // chama a próxima função/middleware na cadeia de middlewares
        next();
    });
}