// importa o Schema de tarefa 
import tarefaSchema from "../schemas/tarefa.js";

// função para criar uma tarefa
async function create(data) {
    // cria uma tarefa usando o Schema da tarefa
    return await tarefaSchema.create(data);
}

// função de achar todas as tarefas do usuário
async function findAllByUser(id) {
    // encontra todas as tarefas pelo ID do usuário
    return await tarefaSchema.find({ userId: id });
}

// função para encontrar uma tarefa pelo seu ID
async function findById(id) {
    return await tarefaSchema.findById(id);
}

// função para encontrar uma tarefa pelo seu ID
async function findTarefaById(id) {
    return await tarefaSchema.findById(id);
}

// função para atualizar a tarefa
async function update(tarefa) {
    // salva a tarefa atualizada pelo banco de dados
    return await tarefa.save();
}

// funçao de encontrar uma tarefa pelo ID e deletá-la
async function findOneAndDelete(idTarefa){
    return await tarefaSchema.findOneAndDelete(idTarefa);
}


// funcção para encontrar as 5 tarefas recentes
async function findRecentes(){
    return tarefaSchema.find({status: 0})
    .sort({created_at: -1}) // ordena por cratedAt em ordem decrescente
    .limit(5); // trás apenas 5 tarefas
}

// exportando as funções
export default {create, findAllByUser, findById, update, findOneAndDelete, findTarefaById, findRecentes};