  
import {Request, Response} from 'express'

export const special = (req: Request, res: Response) => {
  return res.json({ msg: `Hey ${req.body.email}!` });
};


/*
Para hacer una prueba por postman y autenticarse con el token hay que pasa en el header de la sig. forma
KEY: Authorization;  VALUE: Bearer seguido del token
*/