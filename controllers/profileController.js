
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const profileController = {
    deleteProfile: async (req, res) => {
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

            await prisma.user.delete({
                where: { id: userId },
            });

            res.status(200).json({ message: 'Profile deleted successfully' });
        } catch (error) {
            console.error('Error deleting profile:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}    

export default profileController;
