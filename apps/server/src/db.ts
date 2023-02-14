import { DataSource } from 'typeorm';
import { User } from './models';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'process.env.DATABASE_HOST',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'process.env.DATABASE_USER',
  password: process.env.DATABASE_PASSWORD || 'process.env.DATABASE_PASSWORD',
  database: process.env.DATABASE_NAME || 'process.env.DATABASE_NAME',
  entities: [User],
  synchronize: true,
});
