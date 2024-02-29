// importando os serviços crud
import tarefaService from "../services/tarefaService.js";

// funçao para criar ujma nova tarefa
async function create(req, res) {
    // obtendo os dados do corpo da requisição
    const body = req.body;
    // pega o ID do usuário
    const {  id: id } = res.locals.user;

    try{
        // chamando a função create do tarefaService
        const tarefa = await tarefaService.create(body, id);
        // retornaf a requisição 
        return res.status(201).send(tarefa);

    } catch (err) {
        res.status(409).send(err.message);
    }
}

// função para achar todas as tarefas do usuário
async function findAllByUser(req, res) {
    // pega o ID do usuário
    const { _id: id } = res.locals.user;

    try{
        // pega todas as tarefas do usuário com o ID especificado
        const tarefas = await tarefaService.findAllByUser(id)
        // retorna as tarefas
        return res.send(tarefas);

    } catch (err) {
        return res.status(500).send(err.message);
    }
}

// função para atualizar as tarefas
function update(req, res){
    // pega o ID da tarefa
    const { idTarefa } = req.params;
    // obtendo os dados do corpo da requisição
    const body = req.body;
    
    try{
        // chama o serviço para atualizar a tarefa com o ID especificado e passa os novos dados
        tarefaService.update(idTarefa, body)
        // retorna a tarefa atualizada
        return res.status(204).send();

    } catch(err) {
        return res.status(400).json(err.message);
    }
}

// função para excluir a tarefa
async function deleteTarefa(req, res){
    // pega o ID da tarefa
    const { idTarefa } = req.params;

    try{
        // chama o serviço para excluir a tarefa com o ID especificado
        await tarefaService.deleteTarefa(idTarefa);
        return res.status(204).send()

    } catch (err) {
        return res.status(400).json(err.message);
    }
}

// função para achar a tarefa pelo ID (get)
async function findTarefaById(req, res){
    // pega o ID da tarefa
    const id = req.params.id;

    try{
        // chama o serviço para encontrar a tarefa com o ID especificado
        const tarefa = await tarefaService.findTarefaById(id);
        // retorna a tarefa
        return res.send(tarefa)

    }catch(err){
        return res.status(400).json(err.message);
    }
}

async function findRecentes(req, res){
    try{
        // pega todas as tarefas do usuário com o ID especificado
        const recentsTarefas = await tarefaService.findRecentes()
        // retorna as tarefas
        return res.send(recentsTarefas);

    } catch (err) {
        return res.status(500).send(err.message);
    }
}


// exportando as funções para utilizar em outros arquivos
export default { create, findAllByUser, update, deleteTarefa, findTarefaById, findRecentes};