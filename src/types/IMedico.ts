// vamos explorar o MongoDB
import {Document} from "mongoose"

// vamos criar uma classe interface que representa o documento Paciente no MongoDB
export interface IMedico extends Document{
    // variáveis da interface
    nome: string
    crm: string
    especialidade: string   
    convenios: string
    cpf: string
}

