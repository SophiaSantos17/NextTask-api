// importa o repositório de tarefas
import tarefaRepository from "../repositories/tarefaRepository.js";

// função assíncrona para criar uma nova tarefa
async function create(body, id) {
    // verifica se o ID do usuário foi fornecido
    if(!id) throw new Error("User id is required");
    // cria a tarefa associada ao ID do usuário
    return await tarefaRepository.create({ ...body, userId: id }); 
}

// função assíncrona para encontrar todas as tarefas associadas a um usuário
async function findAllByUser(id) {
    // verifica se o ID do usuário foi fornecido
    if(!id) throw new Error("User id is required");
    // retorna todas as tarefas associadas ao ID do usuário
    return await tarefaRepository.findAllByUser(id);
}

// função assíncrona para atualizar uma tarefa existente
async function update(idTarefa, newData) {
    // verifica se a tarefa com o ID fornecido existe no banco de dados
    const existingTarefa = await tarefaRepository.findById(idTarefa);
    if (!existingTarefa) throw new Error("Tarefa não existente");

    // substitui os dados existentes pelos novos dados fornecidos
    Object.assign(existingTarefa, newData);

    // remove o campo 'userId' para evitar alterações indesejadas
    delete existingTarefa.userId;

    // atualiza a tarefa no banco de dados
    return await tarefaRepository.update(existingTarefa);
}

// função assíncrona para excluir uma tarefa
async function deleteTarefa(idTarefa){
    // verifica se a tarefa com o ID fornecido existe no banco de dados
    const existingTarefa = await tarefaRepository.findById(idTarefa);
    if (!existingTarefa) throw new Error("Tarefa não existente");

    // exclui a tarefa do banco de dados
    return await tarefaRepository.findOneAndDelete({_id: idTarefa});
}

// função assíncrona para encontrar uma tarefa pelo seu ID
async function findTarefaById(id){
    // retorna a tarefa com o ID fornecido
    return await tarefaRepository.findTarefaById(id);
}

async function findRecentes(){
    // retorna as tarefas
    return await tarefaRepository.findRecentes();
}

// exporta as funções para que possam ser utilizadas em outros arquivos
export default { create, findAllByUser, update, deleteTarefa, findTarefaById, findRecentes};
