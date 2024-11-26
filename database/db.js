import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const pool = mysql.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER, // Nom d'utilisateur MySQL
  password: process.env.DB_PASSWORD, // Mot de passe MySQL
  database: process.env.DB_NAME, // Nom de la base de données
  port: process.env.DB_PORT, // Port MySQL (par défaut : 3306)
});

export default pool;





// import { Client } from 'pg';

// import dotenv from 'dotenv';
// dotenv.config();

// const client = new Client({
//   host: process.env.PGHOST, 
//   port: process.env.PGPORT,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
//   ssl: {
//     rejectUnauthorized: true 
//   },
// });

// client.connect()
//   .then(() => console.log('Connexion réussie à la base de données'))
//   .catch((err) => console.error('Erreur de connexion à la base de données', err));

// export default client;
