import { Router } from 'express';
import { authController } from '../controllers';
import { validateSchemaMiddleware } from '../middleware';
import { loginUserSchema } from '../schemas';

const authRoute: Router = Router();

authRoute.post(
  '/login',
  validateSchemaMiddleware(loginUserSchema),
  authController.login
);

export { authRoute };
