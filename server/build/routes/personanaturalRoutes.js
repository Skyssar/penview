"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personanaturalController_1 = __importDefault(require("../controllers/personanaturalController"));
class PersonaNaturalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personanaturalController_1.default.list);
        this.router.get('/:id', personanaturalController_1.default.getOne);
        this.router.post('/', personanaturalController_1.default.create);
        this.router.put('/:id', personanaturalController_1.default.update);
        this.router.delete('/:id', personanaturalController_1.default.delete);
    }
}
const personanaturalRoutes = new PersonaNaturalRoutes();
exports.default = personanaturalRoutes.router;
