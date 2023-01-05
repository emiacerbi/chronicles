/*
  Warnings:

  - You are about to drop the column `userId` on the `Hero` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hero" DROP CONSTRAINT "Hero_userId_fkey";

-- DropIndex
DROP INDEX "Hero_userId_key";

-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "userId";
