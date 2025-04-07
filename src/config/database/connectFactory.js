import dotenv from 'dotenv';
dotenv.config();

import { connectMongo } from './mongo.connect.js';
//import { connectSQLServer } from './sqlserver.connect.js';

export const connectToDatabase = async () => {
  const persistence = process.env.PERSISTENCE || 'MONGO';

  switch (persistence.toUpperCase()) {
    case 'MONGO':
      return connectMongo();
   // case 'SQLSERVER':
     // return connectSQLServer();
  
    default:
      throw new Error(`Motor de persistencia no soportado: ${persistence}`);
  }
};
