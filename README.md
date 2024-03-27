# Documentação da API Next Task

## Descrição

A API Next Task é uma aplicação que oferece funcionalidades de cadastro, login e gerenciamento de tarefas. O usuário, ao se cadastrar e logar em sua conta, consegue adicionar tarefas, atualizá-las, deletá-las e visualizar todas as suas tarefas. As tarefas contam com atributos como "tipo", "descrição", "prioridade" e outras funcionalidades.

## Endpoints

### Criar uma nova tarefa

- **URL:** `/tarefas`
- **Método HTTP:** `POST`
- **Parâmetros do corpo:**
  - `titulo` (obrigatório)
  - `descricao` (opcional)
  - `data` (obrigatório)
  - `status` (opcional)
  - `prioridade` (obrigatório)
  - `tipo_tarefa` (obrigatório)
- **Requisitos de autenticação:** Sim

### Listar todas as tarefas do usuário

- **URL:** `/tarefas`
- **Método HTTP:** `POST`
- **Requisitos de autenticação:** Sim

### Obter uma tarefa pelo ID

- **URL:** `/tarefas/:id`
- **Parâmetros de rota:** `id` (id da tarefa)
- **Método HTTP:** `GET`
- **Requisitos de autenticação:** Sim

### Atualizar uma tarefa existente

- **URL:** `/tarefas/:id`
- **Parâmetros de rota:** `id` (id da tarefa)
- **Parâmetros do corpo:** (os mesmos da criação de tarefas)
- **Método HTTP:** `PUT`
- **Requisitos de autenticação:** Sim

### Deletar uma tarefa

- **URL:** `/tarefas/:id`
- **Parâmetros de rota:** `id` (id da tarefa)
- **Método HTTP:** `DELETE`
- **Requisitos de autenticação:** Sim

## Responses

A API pode retornar objetos JSON com as seguintes propriedades:

- `tarefas`: retorna todas as tarefas
- `titulo`: título da tarefa
- `descricao`: descrição da tarefa
- `data`: data em que foi criada a tarefa
- `status`: o status da tarefa (feita/não feita, true/false)
- `prioridade`: prioridade da tarefa (Alta, Média ou Baixa)
- `tipo_tarefa`: categoria da tarefa (Pessoal, Comercial, Lazer, Saúde, Casa)

## Autenticação

Para alguns endpoints, é necessária autenticação. Os requisitos de autenticação estão indicados em cada endpoint.

## Criar um novo usuário

- **URL:** `/signup`
- **Método HTTP:** `POST`
- **Parâmetros do corpo:**
  - `name`: nome do usuário
  - `email`: email do usuário
  - `password`: senha do usuário
- **Requisitos de autenticação:** Sim

## Logar um usuário

- **URL:** `/signin`
- **Método HTTP:** `POST`
- **Parâmetros do corpo:**
  - `email`: email do usuário
  - `password`: senha do usuário
- **Requisitos de autenticação:** Sim

## Códigos de Resposta

- **200 OK:** A solicitação foi bem-sucedida.
- **201 Created:** A solicitação de criação foi bem-sucedida.
- **204 No Content:** A solicitação de exclusão foi bem-sucedida.
- **400 Bad Request:** A solicitação contém dados inválidos.
- **401 Unauthorized:** A autenticação falhou ou não foi fornecida.
- **404 Not Found:** O recurso solicitado não foi encontrado.