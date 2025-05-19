/*
  Warnings:

  - You are about to drop the column `photo` on the `Speaker` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Sponsor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Speaker" DROP COLUMN "photo";

-- AlterTable
ALTER TABLE "Sponsor" DROP COLUMN "logo";
