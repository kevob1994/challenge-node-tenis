import { AppDataSource } from '../db';
import { User } from '../models';

export const userRepo = {
  async findByEmail(email: string): Promise<User | null> {
    const repo = AppDataSource.getRepository(User);
    return repo.findOneBy({ email });
  },

  async findById(id: number): Promise<User | null> {
    const repo = AppDataSource.getRepository(User);
    return repo.findOneBy({ id });
  },

  async create(user: User): Promise<User> {
    const repo = AppDataSource.getRepository(User);
    const userObj = Object.assign(new User(), user);
    return await repo.save(userObj);
  },
};
