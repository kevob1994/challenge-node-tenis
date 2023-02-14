import { Request, Response } from 'express';
import { userRepo } from '../repositories';
import bcrypt from 'bcryptjs';
import { ERRORS } from '../constants/errors';
import jsonwebtoken from 'jsonwebtoken';

type ApiResponse = Promise<Response>;

export const login = async (
  req: Request,
  res: Response
): Promise<ApiResponse> => {
  const { email, password: pswrd } = req.body;
  try {
    const user = await userRepo.findByEmail(email);

    if (user && user.email == email) {
      const isMatch = await bcrypt.compare(pswrd, user.password);

      if (!isMatch) return res.status(400).json(ERRORS.USER_NOT_FOUND);

      const payload = {
        user: {
          id: user.id,
        },
      };
      const token = await jsonwebtoken.sign(payload, process.env.TOKEN_SECRET || '', {
        expiresIn: 360000,
      });
      const { password, ...response } = user;
      return res.json({ ...response, token });
    }

    return res.status(400).json(ERRORS.USER_NOT_FOUND);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
