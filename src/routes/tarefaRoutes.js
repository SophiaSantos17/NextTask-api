// importando o Router do express para lidar com as rotas
import { Router } from "express";

// importando o tarefaController
import tarefaController from "../controllers/tarefaController.js";

// importa o Middleware de autenticação
import { authMiddleware } from "../middlewares/authMiddleware.js";

// importa o esquema de validação de tarefas
import { Tarefas } from "../schemas/validation/Tarefas.js";

// importa o Middleware de validação do usuário
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";

// criando uma instância do Router para gerenciar as rotas de autenticação
const tarefaRouter = Router();

// aplica o middleware de autenticação a todas as rotas de tarefas.
tarefaRouter.use(authMiddleware)

// definindo a rota para a criação de uma nova tarefa
tarefaRouter.post(
    "/tarefas",
    // aplica o esquema de validação de tarefas
    validationSchemaMiddleware(Tarefas),
    // aplica o middleware de autenticação para verificar se o usuário está autenticado
    authMiddleware,
    tarefaController.create
);

// definindo a rota para pegar todas as tarefas do usuário
tarefaRouter.get(
    "/tarefas",
    // chama o método "findAllByUser" do tarefaController
    tarefaController.findAllByUser
);

tarefaRouter.get(
    "/recentes",
    // aplica o middleware de autenticação para verificar se o usuário está autenticado
    authMiddleware,
    // chama o método "findRencentes do tarefaController"
    tarefaController.findRecentes
)

// definindo a rota para pegar a tarefa pelo ID
tarefaRouter.get(
    "/tarefas/:id",
    // aplica o middleware de autenticação para verificar se o usuário está autenticado
    authMiddleware,
    // chama o método "findTarefaById" do tarefaController
    tarefaController.findTarefaById
);

// definindo a rota para atualizar a tarefa
tarefaRouter.put(
    "/tarefas/:idTarefa",
    // aplica o esquema de validação de tarefas
    validationSchemaMiddleware(Tarefas), 
    // aplica o middleware de autenticação para verificar se o usuário está autenticado
    authMiddleware, 
    // chama o método "update" do tarefaController
    tarefaController.update
);

// definindo a rota para deletar a tarefa
tarefaRouter.delete(
    "/tarefas/:idTarefa",
    // aplica o middleware de autenticação para verificar se o usuário está autenticado
    authMiddleware,
    // chama o método "deleteTarefa" do tarefaController
    tarefaController.deleteTarefa
);

// exporta o router para ser usado em outros arquivos
export default tarefaRouter;