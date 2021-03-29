// importa express
import {Request, Response} from 'express'
// importa o tipo de dado IPaciente
import {IMedico} from '../types/IMedico'
// importa o modelo Paciente
import Medico from '../models/Medico'

// função pra retornar todos os pacientes
const getMedicos = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        // recupera os pacientes
        const medicos: IMedico[] = await Medico.find()
        res.status(200).json({medicos}) // retorna os pacientes recuperados em formato json
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// função para adicionar um paciente
const addMedico = async(req:Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        // recupera os valores do formulário informado pelo usuário
        const corpo = req.body as Pick <IMedico, "nome" | "crm" | "especialidade" | "convenios" | "cpf">
        // monsta o objeto
        const medicos: IMedico = new Medico({
            nome: corpo.nome,
            crm: corpo.crm,
            especialidade: corpo.especialidade,
            convenios: corpo.convenios,
            cpf: corpo.cpf
        }) 
        // efetivamente inserir no banco de dados
        const novoMedico = await medicos.save()
        res.status(200).json({novoMedico})
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// função para remover um paciente
const removeMedico = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        //Tenta remover o paciente
        const medicoRemovido = await Medico.findByIdAndRemove(req.params.id)
        res.status(200).json({
            medicoRemovido
        })
    
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

const updateMedico = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        //recebve os parametros da atualização: 1) id do paciente e 2) novos dados do paciente
        const{
            params: {id},
            body,
        } = req
        // efetiva a atualização
        const pacienteAtualizado: IMedico | null = await Medico.findByIdAndUpdate({_id: id}, body, {new: true})
        //retorna o resultado
        res.status(200).json({
            pacienteAtualizado
        })
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// exporta os métodos criados
export {getMedicos, addMedico, updateMedico, removeMedico}