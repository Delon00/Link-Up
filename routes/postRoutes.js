/**
 * @swagger
 * tags:
 *   name: Post
 *   description: API pour la gestion des posts utilisateur
 */

/**
 * @swagger
 * /post/create:
 *   post:
 *     summary: Créer un nouveau post
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     description: Crée un nouveau post avec les informations fournies. L'utilisateur doit être authentifié.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Mon premier post"
 *               content:
 *                 type: string
 *                 example: "Ceci est le contenu de mon premier post."
 *               userId:
 *                 type: integer
 *                 example: 1
 *               mediaUrl:
 *                 type: string
 *                 example: "https://example.com/media/image.jpg"
 *     responses:
 *       201:
 *         description: Post créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post created successfully"
 *                 post:
 *                   $ref: '#/components/schemas/Post'
 *       401:
 *         description: Authentification nécessaire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
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
 * /post/getPost/{id}:
 *   get:
 *     summary: Récupérer un post par son ID
 *     tags: [Post]
 *     description: Récupère les informations d'un post spécifié par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du post
 *     responses:
 *       200:
 *         description: Informations du post récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 post:
 *                   $ref: '#/components/schemas/Post'
 *       400:
 *         description: ID du post invalide
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid post ID"
 *       404:
 *         description: Post non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Post not found"
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
 * /post/updatePost/{id}:
 *   patch:
 *     summary: Mettre à jour un post par son ID
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     description: Met à jour les informations d'un post spécifié par son ID. L'utilisateur doit être authentifié.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Mon premier post mis à jour"
 *               content:
 *                 type: string
 *                 example: "Ceci est le contenu mis à jour."
 *               mediaUrl:
 *                 type: string
 *                 example: "https://example.com/media/new_image.jpg"
 *     responses:
 *       200:
 *         description: Post mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post updated successfully"
 *                 post:
 *                   $ref: '#/components/schemas/Post'
 *       401:
 *         description: Authentification nécessaire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       404:
 *         description: Post non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Post not found"
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
 * /post/deletePost/{id}:
 *   delete:
 *     summary: Supprimer un post par son ID
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     description: Supprime un post spécifié par son ID. L'utilisateur doit être authentifié.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du post
 *     responses:
 *       200:
 *         description: Post supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Post deleted successfully"
 *       401:
 *         description: Authentification nécessaire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       404:
 *         description: Post non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Post not found"
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
 * /post/getAllPosts:
 *   get:
 *     summary: Récupérer tous les posts
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     description: Récupère tous les posts disponibles. L'utilisateur doit être authentifié.
 *     responses:
 *       200:
 *         description: Liste de tous les posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *       401:
 *         description: Authentification nécessaire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
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
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "Mon premier post"
 *         content:
 *           type: string
 *           example: "Ceci est le contenu de mon premier post."
 *         userId:
 *           type: integer
 *           example: 1
 *         mediaUrl:
 *           type: string
 *           example: "https://example.com/media/image.jpg"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2023-10-01T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2023-10-01T12:00:00Z"
 * securitySchemes:
 *   bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 */


import { PrismaClient } from '@prisma/client';
import express from 'express';
import postController from '../controllers/postController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/create', postController.createPost);
router.get('/getPost/:id', async (req, res) => {
    const postId = parseInt(req.params.id, 10);

    if (isNaN(postId)) {
        return res.status(400).json({ error: 'Invalid post ID' });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json({ post });
    } catch (error) {
        console.error('Error retrieving post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/create', authenticateToken, postController.createPost);
router.patch('/updatePost/:id', authenticateToken, postController.updatePost);
router.delete('/deletePost/:id', authenticateToken, postController.deletePost);
router.get('/getAllPosts', authenticateToken, postController.getAllPosts);

export default router;
