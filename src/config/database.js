// Importa o módulo mongoose para interagir com o MongoDB
import mongoose from "mongoose";
 
// Função assíncrona que estabelece a conexão com o banco de dados MongoDB
export async function conexao() {
    const mongoUrl = 
     "mongodb+srv://nexttask:nexttask123@nexttask.m3ndqve.mongodb.net/?retryWrites=true&w=majority";
    try {
        // conexão com o banco
        await mongoose.connect(mongoUrl);
        console.log("Conectado ao banco!");
    } catch (error) {
        // Em caso de erro durante a conexão, imprime uma mensagem de erro no console
        console.log(err.message);
    }
}

// função para desconectar o banco
export async function disconnectDB() {
    await mongoose.disconnect();
}
