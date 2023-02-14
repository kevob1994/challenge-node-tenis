import { Express } from 'express';
import { authRoute } from './auth.route';
import { serviceRoute } from './services.route';
import { userRouter } from './user.route';

export const routeConfig = (app: Express): void => {
  app.use('/auth', authRoute);
  app.use('/user', userRouter);
  app.use('/service', serviceRoute);
};
