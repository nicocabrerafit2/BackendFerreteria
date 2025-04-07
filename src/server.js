import dotenv from 'dotenv';
import app from './app.js';
import { connectToDatabase } from './config/database/connectFactory.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar la app:', error.message);
    process.exit(1);
  }
};

startServer();
