import {Request, Response, json} from 'express';

import pool from '../database';

class PersonaNaturalController {

    public async  list (req: Request, res: Response) {
        const persona = await pool.query('SELECT * FROM persona_natural');
        res.json(persona.rows);
    }
//obtener un usuario
    public async  getOne  (req: Request, res: Response): Promise<any> {
        
        const { id }  = req.params;
        const persona = await pool.query('SELECT * FROM persona_natural WHERE id_pn = $1', [id]);
       // if (persona.rowCount> 0) {
        //    return res.json(persona.rows.);
        //}
       // res.json({text: 'Usuario encontrado'});
        //res.status(404).json({text: "El usuario no existe"});

        if (persona.rows.length > 0){
            return res.json(persona.rows[0]);
        }
        res.status(404).json({text: "El usuario no existe"});
    }

// crear un usuario persona natural
    public async create (req: Request, res: Response): Promise<void>{
   
        const {nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn} = req.body; 
       
        await pool.query('INSERT INTO persona_natural(nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn]);
      
        res.json({message: 'Usuario creado satisfactoriamente'}); 
       } 

//actualizar usuario
    public async update (req: Request, res: Response): Promise<void> {
        const { id }  = req.params;
        const {nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn} = req.body;
        
        await pool.query('UPDATE persona_natural SET nombres_pn =$1, apellidos_pn = $2, ocupacion_pn = $3, ciudad_pn= $4, telefono_pn= $5, email_pn= $6, password_pn = $7 WHERE id_pn = $8', 
        [nombres_pn, apellidos_pn, ocupacion_pn, ciudad_pn, telefono_pn, email_pn, password_pn, id]);
        
        res.json({message: 'usuario actualizado satisfactoriamente'});
       }

//eliminar usuario
    public async  delete (req: Request, res: Response):  Promise<void> {
        const { id }  = req.params;
        await pool.query('DELETE FROM persona_natural WHERE id_pn = $1', [id]);
        res.json({message: 'el usuario ha sido eliminado'});
    }

    
}

const personanaturalController = new PersonaNaturalController();
export default personanaturalController;