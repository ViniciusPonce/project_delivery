// importa a interface IPaciente
import {IMedico} from '../types/IMedico'

// importa as classes do MongoDB - mongoose
import {model, Schema} from 'mongoose'

// vamos criar um esquema do mongoose para o paciente
const medicoSchema: Schema = new Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        crm: {
            type: String,
            required: true,
        },
        especialidade: {
            type: String,
            required: true,
        },
        convenios: {
            type: String,
            required: true,
        },
        cpf: {
            type: String,
            required: true,
        }
    }
)

// vamos exporta o Schema como Paciente do tipo IPaciente
export default model<IMedico>("Medico", medicoSchema)