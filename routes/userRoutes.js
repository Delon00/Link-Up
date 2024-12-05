/**
 * @swagger
 * /user/getUser/{id}:
 *   get:
 *     summary: Récupérer les informations d'un utilisateur
 *     tags: [User]
 *     description: Récupère les informations d'un utilisateur spécifié par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Informations de l'utilisateur récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     username:
 *                       type: string
 *                       example: john_doe
 *                     nom:
 *                       type: string
 *                       example: Doe
 *                     prenom:
 *                       type: string
 *                       example: John
 *                     bio:
 *                       type: string
 *                       example: This is a bio
 *                     profile:
 *                       type: boolean
 *                       example: true
 *       400:
 *         description: ID de l'utilisateur invalide
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid user ID"
 *       404:
 *         description: Utilisateur non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
/**
 * @swagger
 * /user/getUserByUsername/{username}:
 *   get:
 *     summary: Récupérer les informations d'un utilisateur par username
 *     tags: [User]
 *     description: Récupère les informations d'un utilisateur spécifié par son username.
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: Username de l'utilisateur
 *     responses:
 *       200:
 *         description: Informations de l'utilisateur récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     username:
 *                       type: string
 *                       example: john_doe
 *                     nom:
 *                       type: string
 *                       example: Doe
 *                     prenom:
 *                       type: string
 *                       example: John
 *                     bio:
 *                       type: string
 *                       example: This is a bio
 *                     profile:
 *                       type: boolean
 *                       example: true
 *       400:
 *         description: Username invalide
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid username"
 *       404:
 *         description: Utilisateur non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */

import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/getUser/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const { password, ...userWithoutPassword } = user;
        res.status(200).json({ user: userWithoutPassword });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getUserByUsername/:username', async (req, res) => {
    const { username } = req.params;

    if (!username || typeof username !== 'string') {
        return res.status(400).json({ error: 'Invalid username' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const { password, ...userWithoutPassword } = user;
        res.status(200).json({ user: userWithoutPassword });
    } catch (error) {
        console.error('Error retrieving user by username:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


export default router;
