// importa a biblioteca Joi para validação de dados
import Joi from "joi";

// define o esquema de validação para as tarefas
export const Tarefas = Joi.object({
    // define a validação para o campo 'titulo': string e com no mínimo 3 caracteres
    titulo: Joi.string().min(3),
    // define a validação para o campo 'descricao': string (opcional) e com no mínimo 3 caracteres
    descricao: Joi.string().min(3),
    // define a validação para o campo 'data': string que segue o formato "dd-mm-yyyy" (opcional)
    data: Joi.string(),
    // define a validação para o campo 'status': número que deve ser 0 ou 1 (opcional)
    status: Joi.number().valid(0, 1),
    // define a validação para o campo 'prioridade': string que começa com letra maiúscula e pode ser "Alta", "Média" ou "Baixa" (opcional)
    prioridade: Joi.string().regex(/^[A-Z][a-z]*$/).valid("Alta", "Média", "Baixa"),
    // define a validação para o campo 'tipo_tarefa': string que começa com letra maiúscula e pode ser uma das opções listadas (opcional)
    tipo_tarefa: Joi.string().regex(/^[A-Z][a-z]*$/).valid("Pessoal", "Comercial", "Lazer", "Saúde", "Casa", "Outro")
})
