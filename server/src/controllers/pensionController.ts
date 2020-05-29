import {Request, Response, json} from 'express';

import pool from '../database';

class PensionController {

    public async  list (req: Request, res: Response) {
        const pension = await pool.query('SELECT * FROM pension');
        res.json(pension.rows);
    }
//obtener una pension
    public async  getOne  (req: Request, res: Response): Promise<any> {
        
        const { id }  = req.params;
        const pension = await pool.query('SELECT * FROM pension WHERE codigo_pension = $1', [id]);
       // if (persona.rowCount> 0) {
        //    return res.json(persona.rows.);
        //}
       // res.json({text: 'Usuario encontrado'});
        //res.status(404).json({text: "El usuario no existe"});

        if (pension.rows.length > 0){
            return res.json(pension.rows[0]);
        }
        res.status(404).json({text: "La pensión no existe"});
    }

// crear una pension
    public async create (req: Request, res: Response): Promise<void>{
   
        const {nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension} = req.body; 
       
        await pool.query('INSERT INTO pension(nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension) VALUES ($1, $2, $3, $4, $5)',
        [nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension]);
      
        res.json({message: 'Pensión registrada exitosamente'}); 
       } 

//actualizar pension
    public async update (req: Request, res: Response): Promise<void> {
        const { id }  = req.params;
        const {nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension} = req.body;
        
        await pool.query('UPDATE pension SET nombre_pension =$1, direccion_pension = $2 disponibilidad_pension = $3, precio_pn= $4, descripcion_pn= $5 WHERE codigo_pension = $6', 
        [nombre_pension, direccion_pension, disponibilidad_pension, precio_pension, descripcion_pension, id]);
        
        res.json({message: 'pensión actualizada satisfactoriamente'});
       }

//eliminar usuario
    public async  delete (req: Request, res: Response):  Promise<void> {
        const { id }  = req.params;
        await pool.query('DELETE FROM persona_natural WHERE id_pn = $1', [id]);
        res.json({message: 'el usuario ha sido eliminado'});
    }

    
}

const pensionController = new PensionController();
export default pensionController;