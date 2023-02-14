import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import { AppDataSource } from './db';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

const main = async () => {
  try {
    await await AppDataSource.initialize();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server Started at PORT test: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
