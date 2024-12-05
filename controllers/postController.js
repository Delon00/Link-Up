
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const profileController = {
    createPost: async (req, res) => {
        const { title, content, userId, mediaUrl } = req.body;

        try {
            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    userId,
                    mediaUrl,
                },
            });
    
            res.status(201).json({ message: 'Post créer avec succès', post: newPost });
        } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    deletePost: async (req, res) => {
        const postId = parseInt(req.params.id, 10);

        if (isNaN(postId)) {
            return res.status(400).json({ error: 'Invalid post ID' });
        }

        try {
            await prisma.post.delete({
                where: { id: postId },
            });

            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error('Error deleting post:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getAllPosts: async (req, res) => {
        try {
            const posts = await prisma.post.findMany();
            res.status(200).json({ posts });
        } catch (error) {
            console.error('Error retrieving posts:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    updatePost: async (req, res) => {
        const postId = parseInt(req.params.id, 10);
        const { title, content, mediaUrl } = req.body;

        if (isNaN(postId)) {
            return res.status(400).json({ error: 'Invalid post ID' });
        }

        try {
            const updatedPost = await prisma.post.update({
                where: { id: postId },
                data: {
                    title,
                    content,
                    mediaUrl,
                },
            });

            res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
        } catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}    

export default profileController;
