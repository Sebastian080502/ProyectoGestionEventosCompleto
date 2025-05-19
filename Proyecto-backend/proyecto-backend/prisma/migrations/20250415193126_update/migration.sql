/*
  Warnings:

  - You are about to drop the column `bio` on the `Speaker` table. All the data in the column will be lost.
  - Added the required column `biography` to the `Speaker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Speaker" DROP COLUMN "bio",
ADD COLUMN     "biography" TEXT NOT NULL;
