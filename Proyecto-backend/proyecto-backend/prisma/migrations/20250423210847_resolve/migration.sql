/*
  Warnings:

  - You are about to drop the column `anonymous` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `logoUrl` on the `Sponsor` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Sponsor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "anonymous",
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sponsor" DROP COLUMN "logoUrl",
ADD COLUMN     "phone" TEXT NOT NULL;
