import express, { Express } from 'express';
import cors from 'cors';
import morganBody from 'morgan-body';
import passport from 'passport';
import JWTStrategy from './middleware/passport-jwt';
import { routeConfig } from './routes';
import helmet from 'helmet';

const app: Express = express();

morganBody(app);

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(passport.initialize());
passport.use(JWTStrategy);

app.get('/healthcheck', (req, res, next) => {
  try {
    return res.send(200);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

routeConfig(app);

export default app;
