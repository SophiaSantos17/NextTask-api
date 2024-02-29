import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,               // tipo de dado que vai ser armazenado no banco (String)
        required: true              // campo obrigatório
    },
    email: {
        type: String,               // tipo de dado que vai ser armazenado no banco (String)
        unique: true,               // campo unico
        required: true              // campo obrigatório
    },
    password: {
        type: String,               // tipo de dado que vai ser armazenado no banco (String)
        required: true              // campo obrigatório
    },
    cratedAt: {
        type: Date,                 // tipo de dado que vai ser armazenado no banco (Date)
        default: Date.now()         // valor padrão definido como a data e hora atual
    }
});

// exportando os modelos
export default model("users", UserSchema);