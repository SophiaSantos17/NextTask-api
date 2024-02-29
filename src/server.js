// importa o express/json
import express, { json } from "express";

// importando as Rotas
import authRouter from "./routes/authRoutes.js";
import tarefaRouter from './routes/tarefaRoutes.js';

// importando a função que conecta ao banco
import { conexao } from "./config/database.js";
import cors from "cors";

// cria uma instância do Express
const app = express();

// conexao com o banco de dados
conexao();

// adiciona o middleware para lidar com json e cors
app.use(json());
app.use(cors());

// adicionando as rotas de autenticação ao servidor
app.use(authRouter);
app.use(tarefaRouter);

// executa as requisições na porta 5000 e exibe uma mensagem
app.listen(5000, () => console.log("Server listening in port 5000"));
