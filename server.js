// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import setupSwagger from './utils/swagger.js';

dotenv.config();

const app = express();
setupSwagger(app);
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import postRoutes from './routes/postRoutes.js';


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/profile', profileRoutes);
app.use('/post', postRoutes);



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
