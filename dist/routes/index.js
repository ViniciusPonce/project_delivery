"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa classe Router do express
const express_1 = require("express");
// importa os métodos criados no controller
const MedicoController_1 = require("../controllers/MedicoController");
// cria um objeto da classe Router
const router = express_1.Router();
router.get("/pacientes", MedicoController_1.getPacientes);
router.post("/add-paciente", MedicoController_1.addPaciente);
router.delete("/remove-paciente/:id", MedicoController_1.removePaciente);
router.put("/atualiza.paciente/:id", MedicoController_1.updatePaciente);
// exporta o router
exports.default = router;
