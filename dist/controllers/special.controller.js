"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.special = void 0;
exports.special = (req, res) => {
    return res.json({ msg: `Hey ${req.body.email}!` });
};
/*
Para hacer una prueba por postman y autenticarse con el token hay que pasa en el header de la sig. forma
KEY: Authorization;  VALUE: Bearer seguido del token
*/ 
