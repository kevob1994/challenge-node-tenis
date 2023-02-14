import { Router } from 'express';
import { serviceController } from '../controllers';

const serviceRoute: Router = Router();

serviceRoute.get('/excel', serviceController.getDataExcel);

export { serviceRoute };
