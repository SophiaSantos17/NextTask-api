import { Schema, model } from "mongoose";

const tarefaSchema = new Schema({
    titulo:{
        type: String,       // tipo de dado que vai ser armazenado no banco (String)
        required: true,     // campo obrigatório
    },
    descricao:{
        type: String,       // tipo de dado que vai ser armazenado no banco (String)
        required: false,    // campo opcional
        maxlength: 400,     // max de caracterer
    },
    data:{
        type: Date,         // tipo de dado que vai ser armazenado no banco (String)
        required: true,     // campo obrigatório
    },
    recentes:{
        type: Date,         // tipo de dado que vai ser armazenado no banco (String)
        required: true,     // campo obrigatório
        default: Date.now   // vai pegar automaticamente a data em que a tarefa foi criada
    },
    status:{
        type: Number,      // Tipo de dado para representar o status
        required: false,    // campo opcional
        default: 0,     // Padrão é 0
    },
    prioridade:{
        type: String,       // tipo de dado que vai ser armazenado no banco (String)
        required: true,     // campo obrigatório
    },
    tipo_tarefa:{
        type: String,       // tipo de dado que vai ser armazenado no banco (String)
        required: true,     // campo obrigatório
    },
    userId:{
        type: Schema.Types.ObjectId,    // tipo de dado que vai ser armazenado no banco (String)
        require: true,                 // campo obrigatório
        ref: "users",                  // referenciando a tabela User para pegar o id
    },
    created_at: { 
        type: Date,                  // tipo de dado que vai ser armazenado no banco (Date)
        default: Date.now()          // valor padrão definido como a data e hora atual
    },

}, {timestamps: true}
);

// exportando os modelos
export default model("tarefas", tarefaSchema);


