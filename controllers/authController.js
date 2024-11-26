import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const authController = {
    register: async (req, res) => {
        const { nom, prenom, username, email, password } = req.body;

        if (!email || !password || !prenom || !nom ||!username) {
            return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "L'email n'est pas valide." });
        }

        try {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: 'Utilisateur déjà existant.' });
            }

            const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10);

            const newUser = await prisma.user.create({
                data: {
                    nom,
                    prenom,
                    username,
                    email,
                    password: hashedPassword,
                },
            });


            const token = jwt.sign(
                { userId: newUser.id }, 
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRATION || '1h' }
            );

            const { password: _, ...userData } = newUser;

            res.status(201).json({ 
                message: 'Utilisateur créé avec succès', 
                token, 
                user: userData 
            });

        } catch (err) {
            console.error("Erreur lors de l'inscription :", err);
            res.status(500).json({ message: 'Erreur serveur. Veuillez réessayer plus tard.' });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body; 

        try {
            const user = await prisma.user.findUnique({ where: { email } });
            
            if (!user) {
                return res.status(400).json({ message: 'Utilisateur non trouvé' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'email ou mot de passe incorrect' });
            }

            const token = jwt.sign(
                { userId: user.id, role: user.role }, 
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            const { password: _, ...userData } = user;

            res.status(200).json({ token, user: userData });
            console.log("Données utilisateur :", userData);

        } catch (err) {
            console.error("Erreur lors de la connexion :", err);
            res.status(500).json({ message: `Erreur serveur: ${err.message}` });
        }
    }
};

export default authController;
