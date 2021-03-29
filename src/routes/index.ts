// importa classe Router do express
import {Router} from 'express'
// importa os métodos criados no controller
import {getMedicos, addMedico, removeMedico, updateMedico} from '../controllers/MedicoController'

// cria um objeto da classe Router
const vinicius: Router = Router()

vinicius.get("/medicos", getMedicos)

vinicius.post("/add-medico", addMedico)

vinicius.delete("/remove-medico/:id", removeMedico)

vinicius.put("/atualiza-medico/:id", updateMedico)

// exporta o router
export default vinicius