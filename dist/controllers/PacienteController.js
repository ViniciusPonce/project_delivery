"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePaciente = exports.updatePaciente = exports.addPaciente = exports.getPacientes = void 0;
// importa o modelo Paciente
const Paciente_1 = require("../models/Paciente");
// função pra retornar todos os pacientes
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // tratando exceção
        // recupera os pacientes
        const pacientes = yield Paciente_1.default.find();
        res.status(200).json({ pacientes }); // retorna os pacientes recuperados em formato json
    }
    catch (error) {
        console.log(error);
        throw error; // lançar a exceção
    }
});
exports.getPacientes = getPacientes;
// função para adicionar um paciente
const addPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // tratando exceção
        // recupera os valores do formulário informado pelo usuário
        const corpo = req.body;
        // monsta o objeto
        const paciente = new Paciente_1.default({
            nome: corpo.nome,
            crm: corpo.crm,
            especialidade: corpo.especialidade,
            convenios: corpo.convenios,
            cpf: corpo.cpf
        });
        // efetivamente inserir no banco de dados
        const novoPaciente = yield paciente.save();
        res.status(200).json({ novoPaciente });
    }
    catch (error) {
        console.log(error);
        throw error; // lançar a exceção
    }
});
exports.addPaciente = addPaciente;
// função para remover um paciente
const removePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // tratando exceção
        //Tenta remover o paciente
        const pacienteRemovido = yield Paciente_1.default.findByIdAndRemove(req.params.id);
        res.status(200).json({
            pacienteRemovido
        });
    }
    catch (error) {
        console.log(error);
        throw error; // lançar a exceção
    }
});
exports.removePaciente = removePaciente;
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { // tratando exceção
        //recebve os parametros da atualização: 1) id do paciente e 2) novos dados do paciente
        const { params: { id }, body, } = req;
        // efetiva a atualização
        const pacienteAtualizado = yield Paciente_1.default.findByIdAndUpdate({ _id: id }, body, { new: true });
        //retorna o resultado
        res.status(200).json({
            pacienteAtualizado
        });
    }
    catch (error) {
        console.log(error);
        throw error; // lançar a exceção
    }
});
exports.updatePaciente = updatePaciente;
