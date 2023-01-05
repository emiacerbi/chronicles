/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hero" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hero_userId_key" ON "Hero"("userId");

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
