import { Router } from 'express';

import personanaturalController from '../controllers/personanaturalController';

class PersonaNaturalRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    
    }


    config(): void {
        this.router.get('/', personanaturalController.list);
        this.router.get('/:id', personanaturalController.getOne);
        this.router.post('/', personanaturalController.create);
        this.router.put('/:id', personanaturalController.update);
        this.router.delete('/:id', personanaturalController.delete);
    }

}

const personanaturalRoutes = new PersonaNaturalRoutes();
export default personanaturalRoutes.router;