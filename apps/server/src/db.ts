import { DataSource } from 'typeorm';
import { User } from './models';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'admin',
  database: process.env.DATABASE_NAME || 'nodus-challenge',
  synchronize: true,
  entities: [User],
  migrations: ['src/migrations/**/*{.ts,.js}'],
});
