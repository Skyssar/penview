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
class PersonaNaturalController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield database_1.default.query('SELECT * FROM persona_natural');
            res.json(persona.rows);
        });
    }
    //obtener un usuario
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const persona = yield database_1.default.query('SELECT * FROM persona_natural WHERE id_pn = $1', [id]);
            // if (persona.rowCount> 0) {
            //    return res.json(persona.rows.);
            //}
            // res.json({text: 'Usuario encontrado'});
            //res.status(404).json({text: "El usuario no existe"});
            if (persona.rows.length > 0) {
                return res.json(persona.rows[0]);
            }
            res.status(404).json({ text: "El usuario no existe" });
        });
    }
    // crear un usuario persona natural
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn } = req.body;
            yield database_1.default.query('INSERT INTO persona_natural(nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn) VALUES ($1, $2, $3, $4, $5, $6, $7)', [nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn]);
            res.json({ message: 'Usuario creado satisfactoriamente' });
        });
    }
    //actualizar usuario
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn } = req.body;
            yield database_1.default.query('UPDATE persona_natural SET nombres_pn =$1, apellidos_pn = $2, ocupacion_pn = $3, ciudad_pn= $4, telefono_pn= $5, email_pn= $6, password_pn = $7 WHERE id_pn = $8', [nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn, id]);
            res.json({ message: 'usuario actualizado satisfactoriamente' });
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
const personanaturalController = new PersonaNaturalController();
exports.default = personanaturalController;
