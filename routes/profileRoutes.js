/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: API pour le profile des utilisateurs
 */
/**
 * @swagger
 * /profile/privacy/{id}:
 *   patch:
 *     summary: Mettre à jour le champ profile de l'utilisateur
 *     tags: [Profile]
 *     description: Met à jour le champ profile de l'utilisateur spécifié.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               profile:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Champ profile mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profile updated successfully"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     profile:
 *                       type: boolean
 *                       example: true
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
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

/**
 * @swagger
 * /profile/deleteProfile/{id}:
 *   delete:
 *     summary: Supprimer le profil de l'utilisateur
 *     tags: [Profile]
 *     description: Supprime le profil de l'utilisateur spécifié.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Profil supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profile deleted successfully"
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
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

import express from 'express';
import { PrismaClient } from '@prisma/client';
import profileController from '../controllers/profileController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const prisma = new PrismaClient();
const router = express.Router();

router.patch('/privacy/:id', authenticateToken, async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const { profile } = req.body;

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

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { profile: profile },
        });

        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.delete('/deleteProfile/:id',authenticateToken, profileController.deleteProfile);
export default router;
