import { Router } from 'express';

import pensionController from '../controllers/pensionController';

class PensionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    
    }


    config(): void {
        this.router.get('/', pensionController.list);
        this.router.get('/:id', pensionController.getOne);
        this.router.post('/', pensionController.create);
        this.router.put('/:id', pensionController.update);
        this.router.delete('/:id', pensionController.delete);
    }

}

const pensionRoutes = new PensionRoutes();
export default pensionRoutes.router;