import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { ERRORS } from '../constants/errors';
import { userRepo } from '../repositories';
import jsonwebtoken from 'jsonwebtoken';

type ApiResponse = Promise<Response>;

export const createUser = async (
  req: Request,
  res: Response
): Promise<ApiResponse> => {
  try {
    const { email, first_name, last_name } = req.body;

    const user = await userRepo.findByEmail(email);

    if (user) return res.status(400).json(ERRORS.USER_EXIST);

    const salt = await bcrypt.genSalt(10);
    const pswrd = await bcrypt.hash(req.body.password, salt);

    const newUser = await userRepo.create({
      email,
      password: pswrd,
      first_name,
      last_name,
    });
    const payload = {
      user: {
        id: newUser.id,
      },
    };
    const token = await jsonwebtoken.sign(payload, 'tokenSecret', {
      expiresIn: 360000,
    });
    const { password, ...response } = newUser;
    return res.json({ ...response, token });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getInfo = async (
  req: Request,
  res: Response
): Promise<ApiResponse> => {
  try {
    return res.json(req.user);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
