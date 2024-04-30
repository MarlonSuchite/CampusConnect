"use strict";
/* app.js */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listen = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000 || 30001;
app.use(express_1.default.json()); //Midelware que transforma la req.body en un json
const listen = () => {
    console.log('Hola');
};
exports.listen = listen;
