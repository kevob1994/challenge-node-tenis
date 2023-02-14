import { z } from 'zod';

const { object, string } = z;

export const createUserSchema = object({
  body: object({
    first_name: string({
      required_error: 'Name is required',
    }),
    last_name: string({
      required_error: 'Name is required',
    }),
    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    }).min(8, 'Password must be more than 8 characters'),
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    }).min(8, 'Password must be more than 8 characters'),
  }),
});
