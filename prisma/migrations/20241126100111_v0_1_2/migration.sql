/*
  Warnings:

  - You are about to drop the column `isPublic` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `isPublic`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NULL,
    MODIFY `title` VARCHAR(191) NULL,
    MODIFY `content` VARCHAR(191) NULL;
