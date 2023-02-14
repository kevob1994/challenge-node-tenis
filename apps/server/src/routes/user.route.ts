import { Router } from 'express';
import passport from 'passport';
import { userController } from '../controllers';
import { validateSchemaMiddleware } from '../middleware';
import { createUserSchema } from '../schemas';

const userRouter: Router = Router();

userRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  userController.getInfo
);

userRouter.post(
  '/register',
  validateSchemaMiddleware(createUserSchema),
  userController.createUser
);

export { userRouter };
