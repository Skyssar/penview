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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PensionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pension = yield database_1.default.query('SELECT * FROM pension');
            res.json(pension.rows);
        });
    }
    //obtener una pension
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pension = yield database_1.default.query('SELECT * FROM pension WHERE codigo_pension = $1', [id]);
            // if (persona.rowCount> 0) {
            //    return res.json(persona.rows.);
            //}
            // res.json({text: 'Usuario encontrado'});
            //res.status(404).json({text: "El usuario no existe"});
            if (pension.rows.length > 0) {
                return res.json(pension.rows[0]);
            }
            res.status(404).json({ text: "La pensión no existe" });
        });
    }
    // crear una pension
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension } = req.body;
            yield database_1.default.query('INSERT INTO pension(nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension) VALUES ($1, $2, $3, $4, $5)', [nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension]);
            res.json({ message: 'Pensión registrada exitosamente' });
        });
    }
    //actualizar pension
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension } = req.body;
            yield database_1.default.query('UPDATE pension SET nombre_pension =$1, direccion_pension = $2 disponibilidad_pension = $3, precio_pn= $4, descripcion_pn= $5 WHERE codigo_pension = $6', [nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension, id]);
            res.json({ message: 'pensión actualizada satisfactoriamente' });
        });
    }
    //eliminar usuario
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM persona_natural WHERE id_pn = $1', [id]);
            res.json({ message: 'el usuario ha sido eliminado' });
        });
    }
}
const pensionController = new PensionController();
exports.default = pensionController;
