import dotenv from 'dotenv';
dotenv.config();

import { connectMongo } from './mongo.connect.js';
// import { connectSQLServer } from './sqlserver.connect.js';

const dataConection = {
  MONGO: connectMongo
  // SQLSERVER: connectSQLServer
};

export const connectToDatabase = async () => {
  try {
    const persistence = (process.env.DB_PROVIDER || '').trim().toUpperCase();

    if (!persistence) {
      throw new Error('DB_PROVIDER no está definido. Por favor, establece una opción válida.');
    }

    if (!dataConection[persistence]) {
      throw new Error(`Motor de persistencia no soportado: ${persistence}. Opciones válidas: ${Object.keys(dataConection).join(', ')}`);
    }

    return await dataConection[persistence]();
  } catch (error) {
    console.error(`Error al conectar a la base de datos: ${error.message}`);
    throw error;
  }
};
