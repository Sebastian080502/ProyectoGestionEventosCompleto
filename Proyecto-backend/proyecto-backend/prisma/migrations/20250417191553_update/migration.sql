/*
  Warnings:

  - You are about to drop the column `eventId` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Registration` table. All the data in the column will be lost.
  - Added the required column `email` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_userId_fkey";

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "eventId",
DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
