import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { userRepo } from '../repositories';

export default new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET,
  },
  async (payload, done) => {
    try {
      const user = await userRepo.findById(payload.user.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error);
    }
  }
);
